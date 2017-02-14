var http = require("http");
var fs = require("fs");

var server = http.createServer( (req, res) => {

	fs.readFile("./index.html",'utf-8', (err, data) => {

		if(err) throw err;

		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(data);
		res.end();

	});

});


server.listen(3000, () => {

	console.log("server running at port 3000.");

});