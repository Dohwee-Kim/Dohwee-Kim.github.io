var myhoho = 'kim';
var naekko = ['hehe', 'fef'];
var myObj = { name: 'kim' }; //물음표는옵션
var wha = ' kim'; // 이런 식으로 union type 가능
var myTitle = document.querySelector('#title');
if (myTitle != null) { // narrowing down 잘해야함 
    myTitle.innerHTML = ' hello ';
}
//가장 많이 쓰게 될거임      요 클래스명 
if (myTitle instanceof Element) {
    myTitle.innerHTML = ' hello instanceof 입니당 ';
}
