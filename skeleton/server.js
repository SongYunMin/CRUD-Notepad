const express = require('express'),
	path = require('path'),
	app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static('client'));

// Built -in express
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

// Save Function
app.post('/save', (req, res) => {
	const input = {
		title: req.body.title,
		memo: req.body.memo
	}
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

app.get('/load',(req, res) =>{
	fs.readFile('./notepad.txt', 'UTF-8',function(err, data){
		console.log(data);
		res.send(data);
	})
})

const server = app.listen(8080, () => {
	console.log('Server started!');
});
