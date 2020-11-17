function cartController() {
    return {
        cart: function(req, res) {
            res.render("./customers/cart")
        }
    }
}
module.exports = cartController