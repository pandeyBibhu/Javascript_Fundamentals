# JavaScript Loops, Iterations, and Conditional Statements

JavaScript uses conditions and loops to control the flow of a program. Conditions help us make decisions, and loops help us repeat actions when needed.

## 1. Conditional Statements

Conditional statements are used when we want to execute a block of code only if a certain condition is true.

### if Statement

The `if` statement checks a condition. If the condition is true, the code inside the block runs.

```javascript
let age = 18;

if (age >= 18) {
  console.log("Eligible to vote");
}
```

Explanation:
- `age >= 18` is the condition.
- Since age is 18, the condition is true.
- The message is printed.

### if...else Statement

The `if...else` statement provides an alternative when the condition is false.

```javascript
let num = 7;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

Explanation:
- `num % 2 === 0` checks whether the number is even.
- Since 7 is not divisible by 2, the condition is false.
- The `else` block runs and prints `Odd`.

### if...else if...else Statement

This is used when there are multiple possible conditions.

```javascript
let marks = 80;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

Explanation:
- The program checks the conditions in order.
- If marks are 80, the second condition is true.
- So it prints `Grade B`.

### switch Statement

The `switch` statement is used when there are many fixed choices.

```javascript
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Another day");
}
```

Explanation:
- The value of `day` is checked against each `case`.
- When `day` is 2, it matches `case 2`.
- `break` stops the switch after the matching case.

### Ternary Operator

The ternary operator is a short form of `if...else`.

```javascript
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
```

Explanation:
- The condition is `age >= 18`.
- If true, it returns `"Adult"`.
- Otherwise, it returns `"Minor"`.

## 2. Loops

Loops help us repeat a block of code multiple times without writing it again and again.

### for Loop

The `for` loop is used when the number of iterations is known.

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Explanation:
- `i = 1` initializes the loop.
- `i <= 5` is the condition.
- `i++` increases the value after every iteration.
- The loop prints 1, 2, 3, 4, 5.

### while Loop

The `while` loop runs while a condition remains true.

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

Explanation:
- It keeps running until `i` becomes 6.
- This is useful when the number of times is not fixed in advance.

### do...while Loop

The `do...while` loop runs the block at least once before checking the condition.

```javascript
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

Explanation:
- The code inside the loop runs first.
- Then the condition is checked.
- So even if the condition is false initially, it executes once.

### for...of Loop

The `for...of` loop is used to loop through iterable values such as arrays and strings.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

Explanation:
- `fruits` is an array.
- Each value is assigned to `fruit` one by one.
- The loop prints each fruit.

### for...in Loop

The `for...in` loop is used to loop through the keys of an object.

```javascript
const student = {
  name: "Asha",
  age: 21
};

for (const key in student) {
  console.log(key + ": " + student[key]);
}
```

Explanation:
- `student` has keys like `name` and `age`.
- The loop iterates through those keys.
- The output is:
  - name: Asha
  - age: 21

## 3. Iteration in JavaScript

Iteration means repeating a process to access each item in a collection.

### forEach()

The `forEach()` method is used to iterate over array elements.

```javascript
const numbers = [10, 20, 30];

numbers.forEach((num) => {
  console.log(num);
});
```

Explanation:
- It takes each value in the array and passes it to the callback function.
- This is commonly used when we need to process every element.

### map()

The `map()` method creates a new array by transforming every item.

```javascript
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);

console.log(doubled); // [2, 4, 6]
```

Explanation:
- `map()` does not change the original array.
- It returns a new array with modified values.

### filter()

The `filter()` method creates a new array containing only the elements that satisfy a condition.

```javascript
const nums = [1, 2, 3, 4, 5];
const even = nums.filter((n) => n % 2 === 0);

console.log(even); // [2, 4]
```

Explanation:
- It keeps only the even numbers.
- The condition `n % 2 === 0` checks divisibility by 2.

### reduce()

The `reduce()` method reduces all array elements to a single value.

```javascript
const nums = [1, 2, 3, 4];
const sum = nums.reduce((total, value) => total + value, 0);

console.log(sum); // 10
```

Explanation:
- It starts with an initial value `0`.
- It keeps adding each element to the total.
- Final result is 10.

## 4. break and continue

These keywords are used inside loops to control the flow.

### break

The `break` statement stops the loop immediately.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

Explanation:
- When `i` becomes 5, the loop stops.
- The output will be: 1, 2, 3, 4.

### continue

The `continue` statement skips the current iteration and moves to the next one.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
```

Explanation:
- When `i` is 5, the code skips printing it.
- So the output continues with 6, 7, 8, 9, 10.

## 5. Nested Loops

A nested loop is a loop inside another loop. It is often used for rows and columns or matrix-like data.

```javascript
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + "," + j);
  }
}
```

Explanation:
- Outer loop runs for `i = 1` and `i = 2`.
- Inner loop runs for `j = 1, 2, 3` each time.
- This produces combinations such as `1,1`, `1,2`, `1,3`, `2,1`, etc.

## 6. Summary

- `if`, `else if`, and `else` are used for decision-making.
- `switch` is used for multiple fixed conditions.
- `for`, `while`, and `do...while` are loop statements.
- `for...of` is used for arrays and strings.
- `for...in` is used for objects.
- `break` stops the loop.
- `continue` skips one iteration.
- `forEach`, `map`, `filter`, and `reduce` are useful array iteration methods.

## 7. Quick Exam Example

```javascript
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
```

Explanation:
- The loop runs from 1 to 5.
- If a number is divisible by 2, it is even.
- Otherwise, it is odd.
- Output:
  - 1 is odd
  - 2 is even
  - 3 is odd
  - 4 is even
  - 5 is odd
