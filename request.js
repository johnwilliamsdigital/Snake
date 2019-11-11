var request = require('request');
var options = { url:'http://www.kurnett.com/kraken/' };


request(options, function (err, res, body) {
	var json = JSON.parse(body);
	console.log(json);
});