// OBJECT -> JSON 

let myJson = JSON.stringify(true);
console.log(myJson);

json = JSON.stringify(['apple','banana']);
console.log(json);
// JSON -> OBJECT 

const rabbit = {
    name : 'tobi',
    color : 'REX',
    size: null,
    birthDate: new Date(),
    jump:()=> {
        console.log('${name} jumped !');
    }
}

rabbit_json = JSON.stringify(rabbit);
console.log(rabbit_json);

//원하는 애만 통제할 수 있음
rabbit_json = JSON.stringify(rabbit, ['name','color']);
console.log(rabbit_json);


a = '누구세요'
var a = 1
a = a + '2'
console.log(a)