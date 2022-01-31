class UserStorage {

    //revised loginUser callback 
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout( ()=> {
                if ( (id ==='dk' && password ==='kim') ){
                    resolve(id);
                }
                else {
                    reject(new Error('user not found'));
                }
            }, 2000);
        });
    }

    getRoles(user){

        return new Promise((resolve, reject) => {
            setTimeout( ()=> {
                if (user === 'dk') {
                    resolve({name: 'kim', role: 'admin'});
                }
                else{
                    reject(new Error('no matched roles found'))
                }

            },1000)
        })
    }

}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
.then(user=> userStorage.getRoles(user))
.then(userWithRole=> alert(`Hello, ${userWithRole.name}, you have a ${userWithRole.role} role`))
.catch(error => { console.log(error)});