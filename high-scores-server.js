var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

var port = process.env.PORT || 80;

app.listen(port);