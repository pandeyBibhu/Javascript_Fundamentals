//create objects

const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York

//empty object
const emptyObject = {};
console.log(emptyObject); // Output: {}
emptyObject.name = "Alice";
emptyObject.age = 25;
console.log(emptyObject); // Output: { name: 'Alice', age: 25 }

//object with methods
const calculator = {
    add: function(a, b) {
        return a + b;
    }
};
console.log(calculator.add(5, 3)); // Output: 8

//new Objects()
const newPerson = new Object();
newPerson.name = "Bob";
newPerson.age = 35;
console.log(newPerson); // Output: { name: 'Bob', age: 35 }