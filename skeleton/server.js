const express = require('express'),
    path = require('path'),
    app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('client'));


// Built -in express
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Save Function
app.post('/save', (req, res) => {
    // TODO : 서버가 띄워지고 나서 notepad.txt 가 삭제되면 오류 발생
    // fs.accessSync(`./data/${req.body.title}.txt`, fs.constants.F_OK, (err => {
    //     if (err) {
    //         fs.writeFile(`./data/${req.body.title}.txt`, '', (err) => {
    //             if (err) {
    //                 console.log("File creation failed : ", err);
    //             } else {
    //                 console.log("Make Notepad File");
    //             }
    //         });
    //     } else {
    //         console.log("Notepad file already exists.");
    //     }
    // }));
    try {
        fs.accessSync(`./data/${req.body.title}.txt`, fs.constants.F_OK);
        console.log("파일 읽기 성공");
    }catch{
        fs.writeFile(`./data/${req.body.title}.txt`, '', (err)=>{
           if(err){
               console.log("File creation failed : ", err);
           } else{
               console.log("Make Notepad File");
           }
        });
    }

    let obj = {table: []};
    const input = {
        title: req.body.title,
        memo: req.body.memo
    }
    fs.readFile(`./data/${req.body.title}.txt`, 'UTF-8', function (err, data) {
        console.log(req.body.title);
        if (data !== '') {
            console.log(data,"가 데이터 입니다.");
            obj = JSON.parse(data);
        }
        obj.table.push(input);
        let json = JSON.stringify(obj);
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
    fs.readFile('./notepad.txt', 'UTF-8', function (err, data) {
        const textData = JSON.parse(data);
        const search = req.query.name;
        for (let i = 0; i < textData.table.length; i++) {
            if(textData.table[i].title === search){
                res.send(textData.table[i]);
                return 1; // [FIX] : return 을 입력하지 않아서 중복 response 됨.
            }
        }
        res.send("False");
    })
});


const server = app.listen(8080, () => {
    console.log('Server started!');
});
