const express = require('express'),
	path = require('path'),
	app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static('client'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

// Save 기능은 메모장에 제목과 메모 내용을 JSON 형태로 저장하면 됨
app.post('/save', (req,res) =>{
	console.log(req.body.title);
	console.log(req.body.memo);
})

const server = app.listen(8080, () => {
	console.log('Server started!');
});