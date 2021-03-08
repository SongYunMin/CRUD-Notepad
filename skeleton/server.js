const express = require('express'),
    path = require('path'),
    app = express();
const fs = require('fs');
const session = require('express-session');

app.use(express.json());
app.use(express.static('client'));      // 정적 파일 제공

app.use(session({
    key:'sid',
    secret:'secret',
    resave: false,
    saveUninitialized: true,
    cookie : {maxAge: 600000}
}));

// Built -in express
app.get('/', (req, res) => {
    console.log(req.session);
    if(req.session.user){
        console.log("로그인 되어있음");
        res.redirect('/Notepad.html');
    }else{
        console.log("로그인 되어있지 않음");
        res.sendFile(path.join(__dirname, '/client/Login.html'));
    }
});

// Login Function
app.post('/login', (req, res) =>{
    const ID = ["1234", "thddbsals", "sms8377"];
    const PW = ["1234", "4321", "8704"];
    const NAME = ["Song", "Yun", "Min"];
    const ID_INDEX = ID.indexOf(req.body.id);
    const PW_INDEX = PW.indexOf(req.body.pw);
    if(ID_INDEX === PW_INDEX && (ID_INDEX + PW_INDEX) > -1){
        if(!req.session.user){
            console.log("Session Not Found... Create Session.");
            req.session.user = {
                id:ID[ID_INDEX],
                pw:PW[PW_INDEX],
                name:NAME[ID_INDEX],
                authorized : true
            }
        }
        res.send(NAME[ID_INDEX]);
        return 1;
    }else{
        res.send('False');
        return -1;
    }
});

// Logout Function
app.get('/logout', (req, res)=>{
    if(req.session.user){
        console.log("Logout...");
        req.session.destroy(err => {
                if(err){
                    console.log("Failed to delete session");
                    return -1;
                }
                console.log("Session deletion successful");
                res.send("OK");
                return 1;
            }
        )
    }
});

app.get('/Notepad',  (req, res)=>{
    if(req.session.user){
        console.log("Session...OK");
        res.send("OK");
    }else{
        console.log("Session Not Found");
        res.send("False");
    }
})

// Save Function
app.post('/save-notepad', (req, res) => {
    if (req.body.notepad.title.indexOf('../') !== -1) {
        res.send("Unable to access.");
        return -1;
    }
    // TODO : 마우스 값 가지고 있음
    console.log(req.body.mouse);
    req.session.user.mouse = req.body.mouse;
    console.log(req.session.user.id);
    try {
        fs.accessSync(`./data/notepad/${req.body.notepad.title}.txt`, fs.constants.F_OK);
    } catch {
        fs.writeFile(`./data/notepad/${req.body.notepad.title}.txt`, '', (err) => {
            if (err) {
                console.log("File creation failed : ", err);
            } else {
                console.log("Make Notepad File");
            }
        });
    }

    const input = {
        title: req.body.notepad.title,
        memo: req.body.notepad.memo
    }

    fs.readFile(`./data/notepad/${req.body.notepad.title}.txt`, 'UTF-8', function (err, data) {
        const json = JSON.stringify(input);
        fs.writeFile(`./data/notepad/${req.body.notepad.title}.txt`, json, function (err) {
            if (err) {
                console.log("File Write Error!");
            } else {
                console.log("File Write successful!");
            }
        });
    });
    res.redirect("http://localhost:8080/save-user");
});

app.get('/save-user',(req, res)=>{
    // Session Check
    if(!req.session.user){
        console.log("Session Not Found");
        res.send("False");
    }
    console.log("테스트!");
    console.log(req.session.user.id);
    console.log(req.session.user.mouse);
})

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