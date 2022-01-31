'use strict';

//비동기 처리시에 callback 대신 사용 가능한 유용한 포인트 
//state : pending -> fulfilled or rejected
// producer vs consumer 

//1 Producer               //executor : 바로 실행되기 때문에 유의해야함 , 불필요한 통신이 생길 수 있음
                           // when new Promise is created, the executor runs automatically, so becareful 
const promise = new Promise((resolve, reject) => {
    //doing some heavy work() 
    console.log('doing something...');
    setTimeout( () =>{
        resolve('ellie');
        //reject(new Error('no network'));
    }, 1000 );
});


//2 Consumers : then, catch, finally 를 이용해서 값을 받아올 수 있다.
promise.then((value)=> {
    //값을 받아와서 원하는 기능을 수행함 
    console.log(value);
}).catch(error=>{
    console.log(error);
});



//3. Promise chaining :
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout( ()=> {
        resolve(100),
        1000
    })
});

fetchNumber.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(num-1);
        },1000)
    })
}).then( num => { console.log(num)});


//4. Error handling 
const getHen = () =>
    new Promise ((resolve,reject) => {
        setTimeout(()=> resolve('chicken'), 1000);
    });

const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve(`${hen} => EGG!`)
        ,1000);
    });

const cook = egg =>
    new Promise((resolve,reject) => {
        setTimeout(()=> resolve(`${egg} => Fried!`)
        ,1000);
    });

//닭을 받아서 계란을 만들고, 다시 밀을 만든다, 프러미스 체인 ! 
getHen()
.then(hen => getEgg(hen))
.then(egg=> cook(egg))
.then(meal => console.log(meal));


//실패할 경우의 예제 에러핸들링
const getHen1 = () =>
    new Promise ((resolve,reject) => {
        setTimeout(()=> resolve('pita'), 1000);
    });

const getEgg1 = bread => 
    new Promise((resolve, reject) => {
        //setTimeout(()=> resolve(`${bread} => fries`), 1000);
        setTimeout(()=> reject(new Error(`error ! ${bread} => papabread ?`))
        ,1000);
    });

const cook1 = fries =>
    new Promise((resolve,reject) => {
        setTimeout(()=> resolve(`${fries} => Meal complete!`)
        ,1000);
    });

getHen1()
.then(bread => getEgg1(bread))
.catch(error => {
    return 'cake';
})
.then(fries => cook1(fries))
.then(meal1 => console.log(meal1));