var express = require('express');
var app     = express();
var path    = require('path');

// pointing express to our client side resources
app.use(express.static(path.join(__dirname, '/../client')));

// route for accessing localhost:3000
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});

// start the app
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});