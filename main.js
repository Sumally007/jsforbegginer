// constructor function 
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getfullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
// instatiate object

const person1 = new Person('Ismail', 'Said', '5-8-2001');
const person2 = new Person('gogo', 'mushomary', '3-7-2000');

console.log(person2.getfullName());
console.log(person1);

