// const homeController = require("../../realtime-pizza-app-node-express-mongo-master/realtime-pizza-app-node-express-mongo-master/app/http/controllers/homeController");
const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/customers/authController")
const cartController = require("../app/http/controllers/customers/cartController")

function routes(app) {
    app.get('/', homeController().index)
    app.get('/login', authController().login)
    app.post('/login', authController().loginPost)
    app.get('/register', authController().register)
    app.post('/register', authController().registerPost)

    app.get('/cart', cartController().cart)
    app.post('/updateCart', cartController().update)
}
module.exports = routes