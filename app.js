const express = require('express');
const app = express();
const path = require('path');
const ejs = require("ejs");
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const port = 80;

// Database connection
mongoose.connect("mongodb://localhost:27017/Aamirhat", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});

// Server Static Files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

// set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')




//  Routse Go Here (Sorry For Wrong Commints)

require("./routes/web")(app)



app.listen(80, () => {
    console.log(`Server Started at Port ${port}`)
})