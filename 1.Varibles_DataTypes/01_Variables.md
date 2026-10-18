# JavaScript Variables

A variable is a container used to store data in memory so that it can be used later in a program.

## Why Use Variables?

Variables help us:
- store values like names, numbers, and results
- reuse data in multiple places
- make programs easier to understand and maintain

## Declaring Variables in JavaScript

JavaScript provides three keywords to declare variables:

- `var` - old way, function-scoped
- `let` - modern and recommended, block-scoped
- `const` - used for values that do not change, block-scoped

## Example 1: Using `let`

```javascript
let studentName = "Amit";
let age = 21;

console.log(studentName); // Amit
console.log(age); // 21
```

## Example 2: Using `const`

```javascript
const pi = 3.14;

console.log(pi); // 3.14
```

Note: You cannot reassign a value to a `const` variable.

```javascript
const city = "Pune";
// city = "Mumbai"; // Error
```

## Example 3: Using `var`

```javascript
var marks = 85;
console.log(marks); // 85
```

`var` is older and not preferred in modern JavaScript because it can behave unexpectedly in some scopes.

## Variable Naming Rules

A variable name must:
- start with a letter, underscore (`_`) or dollar sign (`$`)
- not contain spaces
- not be a reserved JavaScript keyword

## Valid Examples

```javascript
let firstName = "Riya";
let _score = 99;
let $amount = 500;
```

## Invalid Examples

```javascript
let 2name = "John";   // starts with a number
let my name = "Asha"; // spaces not allowed
```

## Reassigning Variables

```javascript
let count = 10;
count = 15;

console.log(count); // 15
```

## Summary

- `let` is used when the value may change.
- `const` is used when the value should remain constant.
- `var` is old-style and should generally be avoided in modern JavaScript.

## Practice Example

```javascript
let username = "Kavya";
const company = "TechWorld";

console.log("User:", username);
console.log("Company:", company);
```

Output:

```javascript
User: Kavya
Company: TechWorld
```
