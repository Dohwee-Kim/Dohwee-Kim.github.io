//설치한 라이브러리 첨부해 주세요 
const express = require('express');
//객체를 만들어 주세요 
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//listen 2개 패러미터 ( , 포트 -> 띄운후 실행할 코드 )
app.listen(8080, function() {
    console.log('listening on 8080 ! ');
});

//app.get 2개 파마리터 -> 경로 , 실행할 함수 
app.get('/pet', function(request, response) {
    response.send('you visited pet!');
});

app.get('/beauty', function(request, response) {
    response.send('now you are on beauty page!');
});

// 홈페이지로 접속했을때 
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

// 홈페이지로 접속했을때 
app.get('/write', function(req, res) {
    res.sendFile(__dirname + '/write.html');
})

app.post('/add', function(request, response){
    //request 갖다 쓸려면 또다른 라이브러리가 필요  : body-parser
    response.send('Sent !!');
    console.log(request.body.title);
    console.log(request.body.date);

    //now store to DB
})