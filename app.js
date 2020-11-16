const express = require('express');
const app = express();
const path = require('path');
const ejs = require("ejs");
const expressLayout = require('express-ejs-layouts')
const port = 80;

// Server Static Files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

// set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')


// require("./routes/web")()
app.get('/', (req, res) => {
    res.status(200).render("home")
});
app.get('/cart', (req, res) => {
    res.status(200).render("customers/cart.ejs")
});
app.get('/login', (req, res) => {
    res.status(200).render("auth/login")
});
app.get('/register', (req, res) => {
    res.status(200).render("auth/register")
});



app.listen(80, () => {
    console.log(`Server Started at Port ${port}`)
})