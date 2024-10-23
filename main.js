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


// const ul = document.querySelector('.items');

// ul.remove();

// ul.firstElementChild.textContent = 'hello';

// ul.children[1].innerText = 'Brad';

// ul.lastElementChild.innerHTML = '<h1>hellow!</h1>';

// const btn = document.querySelector('.btn');

// btn.style.background = 'red';




// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear fields

        nameInput.value = '';
        emailInput.value = '';
    }
}