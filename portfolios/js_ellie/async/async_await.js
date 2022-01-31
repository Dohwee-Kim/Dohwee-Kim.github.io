// async & await
// clear style of using promise :) 

//1. async 써보기 
function fetchUser() {
    //백엔드에서 데이터 받아오기 .. 10초 정도 걸린다고 해보자
    //꼭 promise 안에서는 완료를 해줘야만 한다.
    return new Promise((resolve, reject) => {
        resolve('ellie');
    });
}

const user = fetchUser();
user.then(console.log);

//뭐 이런식이었지 ..


//함수 앞에 async 키워드 붙여주면 ! 
async function fetchUser() {
    //자동으로 함수 안에 있는 애들이 Promise 로 변환됨 
    return 'ellie';
}

// await 에 대하여 .. -> 일단 async 안에서만 사용 가능 
async function getBanana(){
    await delay(2000);
    return 'banana';
}

async function getApple(){
    await delay(1000);
    return 'Apple';
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 이렇게 하면 콜백지옥 같아 보이지 않나요 ? 하지 마세요 
//function pickFruits() {
//    return getApple()
//    .then(apple => {
//        return getBanana()
//        .then(banana => `${apple} + ${banana}`);
//    });
//}

//요것도 그닥 좋진 않아요 ..
async function pickFruits() {
    
        //promise 만들자 마자 
        const applePromise = getApple();
        const bananaPromise = getBanana();
        //
        const apple = await applePromise;
        const banana = await bananaPromise;
    
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 요게 더 보기좋죠 ? 
function pickAllFruits() {

    //promise 배열을 전달하면 다 될때까지 모아줌 
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);


//만약 먼저 되는거 따오고 싶다 ? race API 를 이용 ! 
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);

}

pickOnlyOne().then(console.log);