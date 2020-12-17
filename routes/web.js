// const homeController = require("../../realtime-pizza-app-node-express-mongo-master/realtime-pizza-app-node-express-mongo-master/app/http/controllers/homeController");
const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/customers/authController")
const cartController = require("../app/http/controllers/customers/cartController")
const orderController = require('../app/http/controllers/customers/orderController')
const adminOrderController = require('../app/http/controllers/admin/orderController')
const adminStatusController = require('../app/http/controllers/admin/statusController')
    // Middlewares
const guest = require("../app/http/middlewares/guest")
const auth = require("../app/http/middlewares/auth")
const admin = require("../app/http/middlewares/admin")


function routes(app) {
    // Home Route
    app.get('/', homeController().index)
        //  Login Routes
    app.get('/login', guest, authController().login)
    app.post('/login', authController().loginPost)
        //  Register Routes
    app.get('/register', guest, authController().register)
    app.post('/register', authController().registerPost)
        //  Logout Route
    app.post("/logout", authController().logout)
        //  Cart Rout
    app.get('/cart', cartController().cart)
    app.post('/updateCart', cartController().update)
        // Customers Route
    app.post("/orders", auth, orderController().store)
    app.get("/customer/orders", auth, orderController().index)
    app.get("/customer/orders/:id", auth, orderController().show)
        // Admin Route
    app.get('/admin/orders', admin, adminOrderController().index)
    app.post('/admin/order/status', admin, adminStatusController().index)
}
module.exports = routes