//Object Constructor
//Object constructor is a function that is used to create objects in JavaScript.
// It is a blueprint for creating objects. 
// The object constructor is defined using the function keyword and 
// it can have properties and methods.

function Person(name,age,number,location){
    this.name=name;
    this.age=age;
    this.number=number;
    this.location=location;
}

const person1=new Person("Bibhu",28,123456789,"India");
const person2=new Person("Chandan",30,987654321,"USA");

console.log(person1);
console.log(person2);

console.log("Property default Values");
function Employee(id,first,Last,Age,Designation,Salary){
    this.id=id;
    this.firstName=first;
    this.LastName=Last;
    this.age=Age;
    this.Designation=Designation;
    this.Salary=Salary;

}
const employee1=new Employee(101,"Bibhu","Kumar",28,"Software Engineer",50000);
const employee2=new Employee(102,"Chandan","Pandey",30,"Software Engineer",60000);

console.log(employee1);
console.log(employee2);

//Adding new properties to the object constructor
Employee.prototype.department="IT";
console.log(employee1);
console.log(employee2);
