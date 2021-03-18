let user = { name: 'John', age:22 };

user.sayHi = function() {
    alert('hello');
};

alert.sayHi();

// user = {
//     sayHi: function() {
//         alert('Привет');
//     }
// };

// user = {
//     sayHi () {
//         alert('Privet')
//     }
    
// }


// let user = {
//     name: "John",
//     age: 30,

//     sayHi(){
//         alert(This.name)
//     }

// }

// user.sayHi()


// let user = {
//     name: "Джон",
//     age: 30,

//     sayHi() {
//         alert (user.name);

//     }
// };


// let admin = user;
// user = null

// admin.sayHi();


let user = {name:"Джон"};
let admin = {name:"Админ"};

function sayHi() {
    alert (this.name);
}
