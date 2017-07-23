const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');


// var message

var data = {
	id: 4
};

var token = jwt.sign(data, '1232df');
console.log(token);