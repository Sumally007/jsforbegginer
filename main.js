// constructor function 
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getfullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }


// Class

// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }


//     getBirthYear(){
//         return this.dob.getFullYear();
//     }

//     getfullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }




// // instatiate object

// const person1 = new Person('Ismail', 'Said', '5-8-2001');
// const person2 = new Person('gogo', 'mushomary', '3-7-2000');

// console.log(person2.getfullName());

// console.log(person1);



// Single element
// console.log(document.getElementById('my-form'));

// console.log(document.querySelector('.container'));

// Multiple element

// console.log(document.querySelectorAll('.item'));


// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));


const ul = document.querySelector('.items');

// ul.remove();

ul.firstElementChild.textContent = 'hello';

ul.children[1].innerText = 'Brad';

ul.lastElementChild.innerHTML = '<h1>hellow!</h1>';

const btn = document.querySelector('.btn');

btn.style.background = 'red';