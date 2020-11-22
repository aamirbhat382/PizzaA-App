const json = require("express")

function cartController() {
    return {
        cart: function(req, res) {
            res.render("./customers/cart")
        },
        update: function(req, res) {
            if (!req.session.cart) {
                req.session.cart = {
                    items: {},
                    totalQty: 0,
                    totalPrice: 0
                }
            }
        }

    }

}
module.exports = cartController