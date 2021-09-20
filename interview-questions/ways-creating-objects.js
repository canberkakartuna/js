/**
 * What are the possible ways to create objects in JavaScript
 */

// i. Object constructor:
var car = new Object();

car.model = "Mercedes";
car.year = 2010;

console.log(car);


// ii. Create method:
var student = Object.create({
  name: "Abby",
  age: 20
});
console.log(student.age);


// iii. Object literal syntax:
var person = {} // equivalent to Object.create(null)


// iv. Function construction
function Mechanic(name, age){
  this.name=name;
  this.age=age;
}
var mechanic = new Mechanic("Sudheer", 25);


// v. Function constructor with prototype:
function Teacher(){}
Teacher.prototype.name = "Sudheer";
var teacher = new Teacher();

console.log(teacher.name);
