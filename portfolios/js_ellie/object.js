
person = {
    name : 'dd',
    age : 16,
    skills: 'python3'
}



console.log(person.age);
//요렇게 하면 제대로 출력되지않음 ! 
//privateValue(person, 'name');
//function privateValue(obj, key){
//    console.log(obj.key);
//}

function privateValue(obj, key){
    console.log(obj[key]);
}
privateValue(person, 'name');



const person1 = { name: 'dk' , age : 2 };
function Person(name,age) {
    return {
        name,
        age
    }
}

const person2 = Person('dddd',22);
console.log(person2);