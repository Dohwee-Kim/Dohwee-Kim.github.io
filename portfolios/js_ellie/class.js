'use strict';

class Person {
    constructor(name, age){
        this.publicfield = 1;
        
        this.name = name;
        this.age = age;
    }

    get age() {
        return this.age;
    }

    set age(value) {
        
        if (value <0){
            throw Error('Age can not be negative!!');
        }

        // 이 변수 이름 age 로 하면 안된다. 계속 콜백 일어남
        this._age = value;

        this._age = value < 0 ? 0 : value; 

    }

    //methods 
    speak() {
        console.log('speaking ..');
    }
}

const dk = new Person('dk',22);
console.log(dk.publicfield);
//console.log(dk.privatefield);



//스태틱 예제 
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


//클래스 상속 예제 
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);

    }
    getArea(){
        return this.width * this.height;
    }
}


class Rectagle extends Shape {} 
class Triangle extends Shape {
    //오버라이딩 = 필요한 메소드만 재정의 해서 사용가능 
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectagle(20, 20, 'blue');
const triangle = new Triangle(20,20,'yellow');

rectangle.draw();
console.log(rectangle.getArea());
triangle.draw();
console.log(triangle.getArea());
