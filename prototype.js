
let EmpDetails = function(name, age)
{
this.name = name;
this.age = age;
};

EmpDetails.prototype.getName = function(){
    return this.name;
};

EmpDetails.prototype.getAge = function(){
    return this.age;
};

let emp1 = new EmpDetails('Amit', 38);
console.log(emp1.getName());
console.log(emp1.getAge());


// Next Chapter Polymorphism
// Polymorphism in Object-Oriented Programming
// is the ability to create a variable, a function, or an object 
// that has more than one form.

// Next Chapter Abstraction
// An abstraction is a way of hiding the implementation 
// details and showing only the functionality to the users
// Abstraction hides certain details and only show the 
// essential features of the object.
// This approach improves understandability as well as 
// maintainability of the code. 