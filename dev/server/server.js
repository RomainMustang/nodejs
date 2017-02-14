var express = require("express");
var path    = require("path");
var app     = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){

	res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.get('/test', function(req, res){

	res.sendFile(path.join(__dirname, './public', 'test.html'));
});

app.get('/end', function(req, res){

	res.sendFile(path.join(__dirname, './public', 'end.html'));
});

app.listen(3000);