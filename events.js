const http = require("http"),

event = require("events"),

fs = require("fs"),

port = 3000;

const server = http.createServer((req,res) => {

 fs.readFile("./index.html",(err,data) => {

		if(err) throw new Error("ocurrio algo");

		else {

			res.writeHead(200,{"Content-Type":"text/html"});
			res.end(data);

		}

	})

}).listen(port,() => console.log("corriendo en puerto" + port));