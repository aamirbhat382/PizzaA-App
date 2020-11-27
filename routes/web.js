// const homeController = require("../../realtime-pizza-app-node-express-mongo-master/realtime-pizza-app-node-express-mongo-master/app/http/controllers/homeController");
const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/customers/authController")
const cartController = require("../app/http/controllers/customers/cartController")
    // Middlewares
const guest = require("../app/http/middlewares/guest")


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
}
module.exports = routes