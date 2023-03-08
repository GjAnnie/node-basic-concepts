const fs = require("node:fs") 

let comodines = JSON.parse(fs.readFileSync(__dirname + "/comodines.json")).comodines;

console.log(comodines);

