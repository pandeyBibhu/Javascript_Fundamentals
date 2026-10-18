# JavaScript Operators

Operators are special symbols used to perform operations on values or variables. JavaScript supports many types of operators, and they are used in calculations, comparisons, assignments, logic, and more.

## 1. Arithmetic Operators

Arithmetic operators are used to perform mathematical operations.

```javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
console.log(a ** b); // 100000
```

### Common arithmetic operators:
- `+` : addition
- `-` : subtraction
- `*` : multiplication
- `/` : division
- `%` : modulus (remainder)
- `**` : exponentiation

## 2. Assignment Operators

Assignment operators are used to assign values to variables.

```javascript
let x = 10;

x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2

console.log(x); // 21
```

### Common assignment operators:
- `=` : assign value
- `+=` : add and assign
- `-=` : subtract and assign
- `*=` : multiply and assign
- `/=` : divide and assign
- `%=` : modulus and assign

## 3. Comparison Operators

Comparison operators are used to compare two values and return either `true` or `false`.

```javascript
let a = 10;
let b = 20;

console.log(a == b);  // false
console.log(a != b);  // true
console.log(a > b);   // false
console.log(a < b);   // true
console.log(a >= 10); // true
console.log(a <= 9);  // false
```

### Common comparison operators:
- `==` : equal to
- `===` : strictly equal to (value and type)
- `!=` : not equal to
- `>` : greater than
- `<` : less than
- `>=` : greater than or equal to
- `<=` : less than or equal to

## 4. Logical Operators

Logical operators are used to combine or invert conditions.

```javascript
let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a);     // false
```

### Common logical operators:
- `&&` : AND
- `||` : OR
- `!` : NOT

## 5. Increment and Decrement Operators

These operators increase or decrease the value of a variable by 1.

```javascript
let count = 5;

count++;
console.log(count); // 6

count--;
console.log(count); // 5
```

### Examples:
- `++` : increment
- `--` : decrement

## 6. String Operators

The `+` operator is also used to concatenate strings.

```javascript
let firstName = "John";
let lastName = "Doe";

console.log(firstName + " " + lastName); // John Doe
```

## 7. Ternary Operator

The ternary operator is a short form of an `if...else` condition.

```javascript
let age = 18;

let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Adult
```

### Syntax:
```javascript
condition ? expression1 : expression2;
```

## 8. Bitwise Operators

Bitwise operators work on binary representations of numbers.

```javascript
console.log(5 & 1); // 1
console.log(5 | 1); // 5
console.log(5 ^ 1); // 4
console.log(~5);    // -6
```

These are less commonly used in beginner JavaScript but important in low-level programming.

## 9. Type Operators

`typeof` is used to find the data type of a value.

```javascript
console.log(typeof "Hello"); // string
console.log(typeof 25);       // number
console.log(typeof true);     // boolean
console.log(typeof {});       // object
```

## Example Program Using Multiple Operators

```javascript
let a = 10;
let b = 3;
let c = 5;

console.log(a + b);        // 13
console.log(a > b);        // true
console.log((a + b) > c);  // true
console.log(a % b);        // 1
console.log(a == 10);      // true
```

## Summary

JavaScript operators are used to:
- perform calculations
- assign values
- compare values
- combine conditions
- update variables
- work with strings and conditions

Understanding operators is essential because they are used heavily in JavaScript programs.

## Practice Example

```javascript
let num1 = 12;
let num2 = 7;

console.log(num1 + num2); // 19
console.log(num1 > num2); // true
console.log(num1 % num2); // 5
```
