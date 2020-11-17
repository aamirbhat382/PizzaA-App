const Menu = require('../../models/menu')

function homeController() {
    return {
        index(req, res) {
            const pizzas = Menu.find()
            console.log(pizzas)
            return res.render('home', )
        }
    }
}

module.exports = homeController