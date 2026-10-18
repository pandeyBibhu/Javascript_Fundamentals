# JavaScript Data Types

A data type tells us what kind of value a variable holds. JavaScript is a dynamically typed language, which means you do not need to declare the type explicitly.

## Primitive Data Types

These are the basic built-in data types in JavaScript.

### 1. String
A string is used to store text.

```javascript
let name = "John";
let message = 'Hello JavaScript';

console.log(name);     // John
console.log(message);  // Hello JavaScript
```

### 2. Number
A number stores numeric values, including integers and decimals.

```javascript
let age = 25;
let price = 99.99;

console.log(age);    // 25
console.log(price);  // 99.99
```

### 3. Boolean
A boolean stores either `true` or `false`.

```javascript
let isLoggedIn = true;
let isActive = false;

console.log(isLoggedIn); // true
console.log(isActive);   // false
```

### 4. Undefined
A variable is `undefined` when it is declared but has no value assigned.

```javascript
let x;
console.log(x); // undefined
```

### 5. Null
`null` means the value is intentionally empty or absent.

```javascript
let user = null;
console.log(user); // null
```

### 6. BigInt
`BigInt` is used to store very large integers beyond the safe limit of `Number`.

```javascript
let bigNumber = 12345678901234567890n;
console.log(bigNumber);
```

### 7. Symbol
`Symbol` is used to create unique values.

```javascript
let id = Symbol("id");
console.log(id); // Symbol(id)
```

## Non-Primitive Data Types

### 1. Object
Objects are used to store collections of related data.

```javascript
let student = {
  name: "Priya",
  age: 20,
  course: "JavaScript"
};

console.log(student.name); // Priya
console.log(student.age);  // 20
```

### 2. Array
An array stores multiple values in one variable.

```javascript
let colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // Red
console.log(colors.length); // 3
```

## Checking Data Types

JavaScript provides `typeof` to check the type of a value.

```javascript
console.log(typeof "Hello"); // string
console.log(typeof 42);       // number
console.log(typeof true);     // boolean
console.log(typeof null);     // object
console.log(typeof undefined); // undefined
```

## Example: Using Different Data Types Together

```javascript
let name = "Aarav";
let age = 18;
let isStudent = true;
let hobbies = ["Reading", "Coding", "Traveling"];

console.log(name);
console.log(age);
console.log(isStudent);
console.log(hobbies);
```

## Summary

JavaScript data types are mainly divided into:
- Primitive types: `string`, `number`, `boolean`, `undefined`, `null`, `bigint`, `symbol`
- Non-primitive types: `object`, `array`

Understanding data types is important because every value in JavaScript has a type, and different operations work on different types.

## Quick Practice Example

```javascript
let username = "Sonia";
let score = 95;
let passed = true;

console.log(typeof username); // string
console.log(typeof score);    // number
console.log(typeof passed);   // boolean
```
