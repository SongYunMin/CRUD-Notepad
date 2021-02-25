const express = require('express'),
	path = require('path'),
	app = express();
const fs = require('fs');
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static('client'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/save', (req, res) => {
	console.log(req.body);
	console.log(req.body);
	const input = {
		title: req.body.title,
		memo: req.body.memo
	}
	console.log(input);
	const saveTxt = JSON.stringify(input);
	fs.appendFile('./notepad.txt', saveTxt, function (err) {
		if (err) {
			console.log("File Write Error!");
		} else {
			console.log("OK");
		}
	});
	res.end('ok');
});

const server = app.listen(8080, () => {
	console.log('Server started!');
});