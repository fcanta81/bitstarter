var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(16);
var fs = require('fs');

buffer = fs.readFileSync('index.html');
var phrase = buffer.toString('utf-8');

app.get('/', function(request, response) {
  response.send(phrase);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
