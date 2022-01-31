// async & await
// clear style of using promise :) 

//1. async 써보기 
function fetchUser() {
    //백엔드에서 데이터 받아오기 .. 10초 정도 걸린다고 해보자
    return 'ellie';
}

const user = fetchUser();
console.log(user);