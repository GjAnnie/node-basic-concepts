const {Buffer} = require("node:buffer"),

myBuffer = Buffer.from("hola mundo","utf8");

console.log(myBuffer);

console.log(myBuffer.toString());
