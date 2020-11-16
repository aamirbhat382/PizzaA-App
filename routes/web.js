function routes(app) {
    app.get('/', (req, res) => {
        res.status(200).render("home")
    });
}
module.exports = routes