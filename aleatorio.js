module.exports.numero = function() {

	console.log(Math.random()*100);

}

let nombres = ["juan","jose","maria","esteban","fuckencio","angel","fabricio","ramon","Catalina"];

module.exports.nombres = function() {

	let random_index = Math.floor(Math.random()*nombres.length);

	console.log(nombres[random_index]);

}