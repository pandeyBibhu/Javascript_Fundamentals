// objects properties can be accessed using dot notation or bracket notation and Expressions
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30
console.log(person["city"]); // Output: New York
const propertyName = "name";
console.log(person[propertyName]); // Output: John
person.number="1234567890";
console.log(person.number); // Output: 1234567890
console.log(person)
person["number"]="9876543210";
console.log(person.number);
person.number="1234";
console.log(person.number);
console.log(person)

//delete property
delete person.number;
console.log(person.number); // Output: undefined
console.log(person)

//check If properties exists

const person1={
    name:"Bibhu Kumar",
    location:"India",
    Contact:1234567890
}
console.log("name" in person1); // Output: true
console.log("age" in person1);

//Nested Objects
const person2={
    name:"Bibhu Pandey",
    address:{
        street:"123 Main St",
        city:"New York",    
    state:"NY"
    }
}
console.log(person2.address.street);