//설치한 라이브러리 첨부해 주세요 
const express = require('express');
//객체를 만들어 주세요 
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');  //EJS 를 사용해서 HTML 렌더링
const connectionURL = 'mongodb+srv://dkim:znajyuJ0mpVma07E@cluster0.axemy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const dbName = 'todoapp';
const collectionName = 'post';


MongoClient.connect(connectionURL, function(error, client){
    if(error) {
        return console.log(error);
    }
    db = client.db(dbName);

    //listen 2개 패러미터 ( , 포트 -> 띄운후 실행할 코드 )
    app.listen(8080, function() {
    console.log('listening on 8080 ! ');
});

})

app.use(bodyParser.urlencoded({extended: true}));

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
    //console.log(request.body.title);
    //console.log(request.body.date);

    let min = Math.ceil(10000);
    let max = Math.ceil(20000);
    let tempId = Math.floor(Math.random() * (max - min + 1) + min);

    form_obj = {
        _id : tempId,
        title : request.body.title,
        date : request.body.date
    }

    //now store to DB
    //문법 collection.insertOne( '저장할 데이터' (오브젝트 자료형)! , 콜백함수 )
    /*db.collection(collectionName).insertOne({_id: 100, name: 'John', age: 20}, function(error, result){
        console.log('saved');
    });*/
    db.collection(collectionName).insertOne( form_obj , function(error, result){
        if (error) {
            console.log(error);
        }
    });
})

//누군가 get 요청으로 list 로 접속하면 HTML 로 보여줌
app.get('/list', function(request, response){
    db.collection('post').find().toArray(function(error, result) {
        console.log(result);
        //display DB data list 
                                // 요렇게 쓰면 위에 가져온 result 결과를 posts 란 이름으로 보냄
    response.render('list.ejs', { posts : result});
    });  // 모든 데이터를 다 가져옵니다.  

    

})