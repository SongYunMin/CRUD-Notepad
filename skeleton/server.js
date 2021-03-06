const express = require('express'),
    path = require('path'),
    app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended: false})); // TODO : urlencoded 는 여기서 사용 X
app.use(express.static('client'));

// Built -in express
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// TODO : File 경로 직접 접근 예외처리 필요 ex) ../ 등
// Save Function
app.post('/save', (req, res) => {
    if (req.body.title.indexOf('../') !== -1) {
        console.log("Unable to access.");
        res.send("Unable to access.");
        return -1;
    }
    try {
        fs.accessSync(`./data/${req.body.title}.txt`, fs.constants.F_OK);
        console.log("파일 읽기 성공");
    } catch {
        fs.writeFile(`./data/${req.body.title}.txt`, '', (err) => {
            if (err) {
                console.log("File creation failed : ", err);
            } else {
                console.log("Make Notepad File");
            }
        });
    }

    const input = {
        title: req.body.title,
        memo: req.body.memo
    }

    fs.readFile(`./data/${req.body.title}.txt`, 'UTF-8', function (err, data) {
        const json = JSON.stringify(input);
        fs.writeFile(`./data/${req.body.title}.txt`, json, function (err) {
            if (err) {
                console.log("File Write Error!");
            } else {
                console.log("File Write successful!");
            }
        });
    });
});

// Load Function
app.get('/load', (req, res) => {
    if (req.query.name.indexOf('../') !== -1) {
        console.log("Unable to access.");
        res.send("Unable to access.");
        return -1;
    }
    try {
        fs.accessSync(`./data/${req.query.name}.txt`, fs.constants.F_OK);
        console.log(`Read '${req.query.name}' File`);
    } catch {
        console.log("FILE_NOT_FOUND");
        res.send(JSON.stringify("FILE_NOT_FOUND"));
        return -1;
    }

    fs.readFile(`./data/${req.query.name}.txt`, 'UTF-8', function (err, data) {
        const textData = JSON.parse(data);
        res.send(textData);
        return 1;
    });
});

const server = app.listen(8080, () => {
    console.log('Server started!');
});