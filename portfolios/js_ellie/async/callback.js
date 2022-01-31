//console.log(1);
//console.log(2);
//console.log(3);

//ASYNC 기본 예제 
console.log(1);
setTimeout( function () { console.log(2);}, 1000);
//console.log(2);
console.log(3);

//Synchronous callback 
function printImmediately(print) {
    print();//프린트라는 콜백함수 
}

printImmediately( ()=> console.log('hello'));



//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);




//callback hell example 
//백엔드와 통신하는 예제 
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout( ()=> { 
            if ( (id === 'abcd' && password ==='dream') || (id ==='coder' && password ==='pwd') )
            {
                onSuccess(id);
            } else {
                onError(new Error('not Found'));
            }
        }
        , 1000);
    }

    getRoles(user, onSucess, onError) {
        setTimeout( ()=> {
            if ( user === 'abcd'){
                onSucess( {name: 'abcd', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);

    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password,
    (user)=> {
        userStorage.getRoles(
            user, 
            (userWithRole)=> {
                alert(`Hello, ${userWithRole.name}, you have a ${userWithRole.role} role`);
            }, 
            error => {
                console.log(error);
            }
        )
    },
    (error)=>{
        console.log(error);
    }
)