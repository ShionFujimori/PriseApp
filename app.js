var express = require('express');
var path = require("path");
var app = express();


//Bunch of get functions
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, "about.html"))
});

app.get('/pricing', function(req, res) {
    res.sendFile(path.join(__dirname, "pricing.html"))
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, "contact.html"))
});

app.get('/features', function(req, res) {
    res.sendFile(path.join(__dirname, "features.html"))
});

app.get('/profile', function(req, res) {
    res.sendFile(path.join(__dirname, "profile.html"))
});

app.get('/sponsors', function(req, res) {
    res.sendFile(path.join(__dirname, "sponsors.html"))
});


//Error Handler
function handleErrorPage(req, res) {
    res.status(500).sendFile(path.join(__dirname, "404.html"));
}
app.use(handleErrorPage);

app.listen(3000);

//  http://localhost:3000/
//  http://localhost:3000/about
//  http://localhost:3000/pricing
//  http://localhost:3000/contact
//  http://localhost:3000/features
//  http://localhost:3000/profile
//  http://localhose:3000/sponsors

