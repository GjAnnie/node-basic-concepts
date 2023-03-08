const fs = require("fs"),

chunkSize = 16 * 1024,

readStream = fs.createReadStream("./texto.txt",{

	enconding:"utf8",
	highWaterMark:chunkSize

});

writeStream = fs.createWriteStream("./texto.txt");

readStream.pipe(writeStream);


