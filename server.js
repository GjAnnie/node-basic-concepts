const http = require("http"),

hostname = "127.0.0.1",

port = 3000,

server = http.createServer((req,res) => {

	res.statusCode = 200
	res.setHeader("Content-Type","text/plain");
	res.end("hello-world");

});

server.listen(port,hostname,() => {

	console.log(`Server running at http://${hostname}:${port}/`);

});