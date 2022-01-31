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
    await delay(1000);
    return 'banana';
}

async function getApple(){
    await delay(2000);
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
// 요렇게 .. 
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}


pickFruits().then(console.log);