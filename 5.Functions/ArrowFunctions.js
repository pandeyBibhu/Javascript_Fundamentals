//Arrow functions are a more concise syntax for writing function expressions in JavaScript. They are often used for short functions and callbacks. Here’s an example of how to use arrow functions:

// Basic arrow function
const printName=(name)=>{
    console.log(name)
}

printName("Bibhu Pandey");
const add=(a,b)=>{
    return a+b;
}

console.log(add(5, 3));

const multiply=(a,b)=>a*b; // Implicit return for single expression
console.log(multiply(4, 6));

const hello=()=>"Hello world"; // No parameters
console.log(hello());

//Arrow function with single parameter does not require parentheses
const square=x=>x*x;
console.log(square(5));

const squre=(x)=>x*x;// Arrow function with parentheses for single parameter
console.log(squre(5));

const helloName=(name)=>'Hello '+name; // Template literals with arrow function
console.log(helloName("Bibhu Pandey"));

const helloName1=name=>'Hello '+name; // Template literals with arrow function without parentheses
console.log(helloName1("Bibhu Pandey"));

//Arrow functions and This keyword
//Arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding scope. This can be useful in certain situations, such as when working with callbacks or event handlers.

const arrowFunctionExample={
    name:"Bibhu Pandey",
    greet: function(){
        {    this.name="Bibhu Pandey";
            
        }
    }
}
console.log(arrowFunctionExample.greet());
console.log(arrowFunctionExample.name);