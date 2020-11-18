const pizzas = require('../../models/menu')

function homeController() {
    return {
        index(req, res) {
            pizzas.find().then(function(pizzas) {
                // console.log(pizzas)
                //  We will add async function to make it More Beautful ! [After 3 Days we compleate this Task ]
                return res.render('home', { pizzas: pizzas })
            })


        }
    }
}

module.exports = homeController