var express = require('express');
// const router = express.Router();
var app = express();
app.listen(3000);

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('<h1>Hello World!<h1>');
});

// app.get('/data', (req, res) => {
// 	res.send('Lack of Parameter');
// 	});

app.get('/data', (req, res) => {
	var result;
	if (isNaN(req.query.number)){
		if(typeof(req.query.number) == 'undefined'){
			result = 'Lack of Parameter';
		}else{
			result = 'Wrong Parameter';
		}
	}else{
		result = ((1 + Number(req.query.number)) *Number(req.query.number))/2;
	}
	res.send(`${result}`);
});
