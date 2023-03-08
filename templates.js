const http = require("http"),
fs = require("fs"),
titulo = "aqui va un titulo",
parrafo = "aqui va un parrafo",

server = http.createServer((req,res) => {

	res.writeHead(200,{"Content-Type":"text/html"});

	let html = fs.readFileSync("./indexTemplate.tpl");

	html = html.toString();

	html = html.replace('%titulo%',titulo).replace('%parrafo%',parrafo);

	res.end(html);


})

server.listen(3000,() => console.log("ejecutandose server"));
