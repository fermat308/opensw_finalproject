const express = require('express');
const app = express();
var fs = require('fs');

app.listen(8010, function() {
    console.log('listening on 8010')
})

app.use(express.static('images'))

app.get('/', function(req, res) { 
    res.sendFile(__dirname +'/home.html')
 })

 app.get('/tour', function(req, res) { 
    res.sendFile(__dirname +'/tour.html')
 })

 app.get('/restaurant', function(req, res) { 
    res.sendFile(__dirname +'/restaurant.html')
 })



