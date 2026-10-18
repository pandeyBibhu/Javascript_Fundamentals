console.log("\n*********************MAP***************\n")
//A javascript MAP can store collection of Key-Value pair.
//Keys can be any data type(String,Number,Objects etc.)
//Map Rember the original Insertion order of the keys
//The number items in a map eaisly retrive by using size property.
//

//Creation of Map
//We can create MAP using new Map() and Add the values using Map.set();

const fruits=new Map();

fruits.set("Apple",500)
fruits.set("Banana",400)
fruits.set("Guava",600)
fruits.set("Mango",500)

console.log(fruits);

//Pass an Array to Map constructor
console.log("\n=============Passing Array to Map====================\n")
let fruits1=new Map([["Apple",300],["Mango",400],["Pineapple",500],["Guava",700]]);

console.log(fruits1)

console.log("\n=================Adding and Changing the Values using set() method===============\n")

fruits.set("Apple",900);
console.log(fruits)

console.log("=====================get()========================")
console.log(fruits.get('Apple'));
console.log(fruits1.get('Apple'));

//Maps are objects
console.log(typeof fruits1);
console.log(fruits instanceof Map);
