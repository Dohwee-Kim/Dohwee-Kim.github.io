'use strict';

console.log('hello world!');
let name = 'elli';
name = 'hi'
console.log(name);

let dk_obj = {
    age : 28
};

let age = 15;

console.log(`hi I am ${dk_obj.age} \n years old`);
name.length

//default value
function showMessage(message, from = 'unknown') {
    console.log(`${message} arrived. from ${from}`);

}

//Rest parameters . Added in ES6
function printAll(...args){
    for (let i=0; i<args.length; i++) {
        console.log(args[i]);
    }

    //or 

    // in 을 쓰면 index 가 나감
    for (const arg of args) {
        console.log(arg);
    }
}
printAll('hi','I','am','dk');

//Callback 예제 
function randomQuiz(answer, printYes, printNo){
    if (answer === 'I love you') {
        printYes();
    }
    else {
        printNo();
    }
}

const printYes = function () {
    console.log('Yes!');
}

const printNo = function () {
    console.log('No');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('I love you', printYes, printNo);



//Arrow function example 
//arrow is always anonymous 
// const simplePrint = function () { console.log('simplePrint!')} ; 
const add = (a ,b ) => { return a +b; }
const simpleMultiply = (a,b) => { return a*b;}
const simplePrint1 = ()=> {console.log('simplePrint');}



