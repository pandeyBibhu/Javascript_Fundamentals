# JavaScript Arrays

An array is an ordered collection of values. Each value has a numeric index, and
indexes start at `0`.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits.length); // 3
```

JavaScript arrays are dynamic:

- They can grow or shrink.
- They can contain values of different types.
- They can contain duplicate values.
- They are zero-indexed.
- They are objects, so `typeof []` returns `"object"`.

## 1. Creating Arrays

### Array literal (recommended)

The array literal is the simplest and most common way to create an array.

```javascript
const numbers = [10, 20, 30];
const emptyArray = [];
```

### `new Array()`

The `Array` constructor can create an array, but be careful with one numeric
argument: `new Array(3)` creates three empty slots instead of `[3]`.

```javascript
const values = new Array(10, 20, 30);
const emptySlots = new Array(3);

console.log(values); // [10, 20, 30]
console.log(emptySlots.length); // 3
```

Use `Array.of()` when the arguments should become the array values:

```javascript
console.log(Array.of(3)); // [3]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
```

### `Array.from()`

`Array.from()` creates a new array from an iterable or array-like value, such
as a string, `Set`, or `NodeList`.

```javascript
const letters = Array.from("HELLO");
console.log(letters); // ["H", "E", "L", "L", "O"]

const doubled = Array.from([1, 2, 3], (number) => number * 2);
console.log(doubled); // [2, 4, 6]
```

## 2. Common Types and Forms of Arrays

JavaScript has one built-in `Array` type, but arrays can be used in several
forms.

### One-dimensional array

A one-dimensional array contains values in a single list.

```javascript
const colors = ["red", "green", "blue"];
```

### Multidimensional (nested) array

A nested array contains other arrays. A two-dimensional array is useful for
rows and columns, such as a table or matrix.

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log(matrix[1][2]); // 6
```

There is no separate multidimensional array type; it is an array containing
other arrays.

### Homogeneous array

A homogeneous array contains values of one logical type.

```javascript
const scores = [80, 92, 75, 88];
```

### Heterogeneous (mixed) array

JavaScript also allows values of different types in the same array.

```javascript
const mixed = ["Asha", 21, true, null];
```

Although this is valid, keeping related arrays homogeneous usually makes code
easier to understand and maintain.

### Sparse array

A sparse array has missing indexes, called empty slots. An empty slot is
different from an element whose value is explicitly `undefined`.

```javascript
const sparse = [];
sparse[2] = "third";

console.log(sparse.length); // 3
console.log(0 in sparse); // false
console.log(2 in sparse); // true
```

Prefer dense arrays with explicit values when possible:

```javascript
const dense = [undefined, undefined, "third"];
```

### Typed arrays

Typed arrays are different from normal arrays. They store a fixed type of
numeric data in a binary buffer, for example `Int32Array` or `Float64Array`.
They are useful for binary files, graphics, and performance-sensitive numeric
work.

```javascript
const measurements = new Float64Array([1.5, 2.75, 3.25]);

console.log(measurements[1]); // 2.75
```

Typed arrays do not have every method of a normal array and cannot change
length with `push()` or `pop()`.

### Array-like objects (not arrays)

An array-like object has numeric keys and a `length` property, but it may not
have array methods.

```javascript
const arrayLike = { 0: "a", 1: "b", length: 2 };

console.log(Array.isArray(arrayLike)); // false
console.log(Array.from(arrayLike)); // ["a", "b"]
```

Use `Array.isArray()` to reliably check whether a value is a normal array:

```javascript
console.log(Array.isArray([1, 2])); // true
console.log(Array.isArray("hello")); // false
```

## 3. Adding and Removing Elements

The following methods change the original array.

### `push()`

`push()` adds one or more elements to the end of an array. It returns the new
array length.

```javascript
const numbers = [1, 2];
const newLength = numbers.push(3, 4);

console.log(numbers); // [1, 2, 3, 4]
console.log(newLength); // 4
```

### `pop()`

`pop()` removes and returns the last element. It returns `undefined` for an
empty array.

```javascript
const numbers = [1, 2, 3];
const lastNumber = numbers.pop();

console.log(lastNumber); // 3
console.log(numbers); // [1, 2]
```

### `unshift()`

`unshift()` adds one or more elements to the beginning and returns the new
array length.

```javascript
const fruits = ["Banana", "Mango"];
fruits.unshift("Apple");

console.log(fruits); // ["Apple", "Banana", "Mango"]
```

### `shift()`

`shift()` removes and returns the first element. It returns `undefined` for an
empty array.

```javascript
const fruits = ["Apple", "Banana", "Mango"];
const firstFruit = fruits.shift();

console.log(firstFruit); // Apple
console.log(fruits); // ["Banana", "Mango"]
```

### `splice()`

`splice(start, deleteCount, ...items)` removes, replaces, or inserts elements.
It changes the original array and returns an array containing the removed
elements.

```javascript
const fruits = ["Apple", "Banana", "Mango", "Orange"];

const removed = fruits.splice(1, 2, "Kiwi", "Grapes");

console.log(removed); // ["Banana", "Mango"]
console.log(fruits); // ["Apple", "Kiwi", "Grapes", "Orange"]
```

To insert without deleting, use `deleteCount` equal to `0`:

```javascript
const numbers = [1, 3];
numbers.splice(1, 0, 2);

console.log(numbers); // [1, 2, 3]
```

## 4. Copying and Combining Arrays

### `slice()`

`slice(start, end)` returns a shallow copy of part of an array. The `end`
index is not included, and the original array is not changed.

```javascript
const fruits = ["Apple", "Banana", "Mango", "Orange"];

const selected = fruits.slice(1, 3);

console.log(selected); // ["Banana", "Mango"]
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
```

Useful forms include:

```javascript
const copy = fruits.slice();
const lastTwo = fruits.slice(-2);
```

The copy is shallow, so nested objects or arrays are still shared:

```javascript
const original = [{ completed: false }];
const copyOfOriginal = original.slice();
copyOfOriginal[0].completed = true;

console.log(original[0].completed); // true
```

### `concat()`

`concat()` combines arrays and values into a new array. It does not change the
arrays being combined.

```javascript
const first = [1, 2];
const second = [3, 4];

const combined = first.concat(second, 5);

console.log(combined); // [1, 2, 3, 4, 5]
console.log(first); // [1, 2]
```

## 5. Searching Arrays

### `includes()`

`includes(value, fromIndex)` returns `true` if the array contains the value;
otherwise it returns `false`. It can correctly find `NaN`.

```javascript
const numbers = [10, 20, NaN];

console.log(numbers.includes(20)); // true
console.log(numbers.includes(30)); // false
console.log(numbers.includes(NaN)); // true
```

### `indexOf()`

`indexOf(value, fromIndex)` returns the first matching index, or `-1` if the
value is not found. It uses strict equality and therefore does not find `NaN`.

```javascript
const fruits = ["Apple", "Banana", "Apple"];

console.log(fruits.indexOf("Apple")); // 0
console.log(fruits.indexOf("Apple", 1)); // 2
console.log(fruits.indexOf("Mango")); // -1
```

## 6. Callback and Transformation Methods

The callback methods below receive the current value, its index, and the
array. The index and array parameters are optional.

```javascript
array.method((value, index, array) => {
  // return a result
});
```

### `map()`

`map()` calls a function for every element and returns a new array containing
the transformed values. It does not change the original array.

```javascript
const prices = [10, 20, 30];
const pricesWithTax = prices.map((price) => price * 1.1);

console.log(pricesWithTax); // [11, 22, 33]
console.log(prices); // [10, 20, 30]
```

Use `map()` when the result should have one output for each input element.

### `filter()`

`filter()` returns a new array containing only the elements for which the
callback returns `true`. It does not change the original array.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]
```

### `reduce()`

`reduce()` combines array elements into one value. The second argument is the
initial accumulator value and should usually be provided.

```javascript
const numbers = [1, 2, 3, 4];
const total = numbers.reduce(
  (sum, number) => sum + number,
  0
);

console.log(total); // 10
```

The accumulator can be any type, so `reduce()` can build an object or group
values as well as calculate a number:

```javascript
const words = ["cat", "dog", "cat"];
const counts = words.reduce((result, word) => {
  result[word] = (result[word] || 0) + 1;
  return result;
}, {});

console.log(counts); // { cat: 2, dog: 1 }
```

### `find()`

`find()` returns the first element that satisfies the callback. If no element
matches, it returns `undefined`.

```javascript
const users = [
  { name: "Asha", age: 17 },
  { name: "Ravi", age: 21 }
];

const adult = users.find((user) => user.age >= 18);

console.log(adult); // { name: "Ravi", age: 21 }
```

### `findIndex()`

`findIndex()` returns the index of the first element that satisfies the
callback. If no element matches, it returns `-1`.

```javascript
const numbers = [4, 7, 10, 13];
const index = numbers.findIndex((number) => number > 9);

console.log(index); // 2
```

### `some()`

`some()` returns `true` when at least one element satisfies the callback. It
returns `false` when no element matches.

```javascript
const scores = [45, 62, 38, 71];
const hasPassed = scores.some((score) => score >= 50);

console.log(hasPassed); // true
```

### `every()`

`every()` returns `true` only when all elements satisfy the callback.

```javascript
const scores = [65, 72, 81];
const allPassed = scores.every((score) => score >= 50);

console.log(allPassed); // true
```

### `forEach()`

`forEach()` runs a function once for each element. It always returns
`undefined`, so it should be used for side effects such as logging or updating
an external value, not for creating a transformed array.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
```

Unlike a regular `for` loop, `forEach()` cannot be stopped with `break` or
`continue`. Use a `for...of` loop when early exit is needed.

## 7. Advanced Array Techniques

### Destructuring

Array destructuring assigns array elements to variables by position. The rest
pattern collects remaining elements into a new array.

```javascript
const colors = ["red", "green", "blue"];
const [first, second] = colors;
const [head, ...tail] = colors;

console.log(first, second); // red green
console.log(head, tail); // red ["green", "blue"]
```

Default values can be used when an index is missing:

```javascript
const [name = "Unknown"] = [];
console.log(name); // Unknown
```

### Spread syntax

Spread syntax expands an array into individual values. It is useful for
copying and combining arrays without mutating the originals.

```javascript
const first = [1, 2];
const second = [3, 4];
const combined = [...first, ...second];
const copy = [...combined];

console.log(combined); // [1, 2, 3, 4]
```

This is a shallow copy, just like `slice()` and `concat()`.

### `flat()`

`flat(depth)` returns a new array with nested arrays flattened. The default
depth is `1`; use `Infinity` to flatten all levels.

```javascript
const nested = [1, [2, [3, 4]]];

console.log(nested.flat()); // [1, 2, [3, 4]]
console.log(nested.flat(Infinity)); // [1, 2, 3, 4]
```

### `flatMap()`

`flatMap()` maps every element and then flattens the result by one level. It
is useful when one input item can produce zero or more output items.

```javascript
const sentences = ["hello world", "javascript arrays"];
const words = sentences.flatMap((sentence) => sentence.split(" "));

console.log(words); // ["hello", "world", "javascript", "arrays"]
```

### Sorting and reversing

`sort()` and `reverse()` mutate the original array. Without a comparator,
`sort()` compares values as strings, which can produce unexpected numeric
results.

```javascript
const numbers = [10, 2, 30];
numbers.sort((a, b) => a - b);
numbers.reverse();

console.log(numbers); // [30, 10, 2]
```

Modern non-mutating alternatives are `toSorted()` and `toReversed()`:

```javascript
const numbers = [10, 2, 30];
const sorted = numbers.toSorted((a, b) => a - b);
const reversed = numbers.toReversed();

console.log(numbers); // [10, 2, 30]
console.log(sorted); // [2, 10, 30]
console.log(reversed); // [30, 2, 10]
```

### Immutability and copying

When working with state, create a new array instead of changing the existing
one:

```javascript
const todos = ["Learn", "Practice"];
const updatedTodos = [...todos, "Build"];
const withoutFirst = todos.slice(1);

console.log(todos); // ["Learn", "Practice"]
```

Array copies are shallow. `structuredClone()` can make a deep copy of many
standard data values when nested objects must not share references:

```javascript
const original = [{ tags: ["javascript"] }];
const deepCopy = structuredClone(original);

deepCopy[0].tags.push("arrays");
console.log(original[0].tags); // ["javascript"]
```

### Iterators

Arrays are iterable, so they work with `for...of`, spread syntax, and
`Array.from()`. The `entries()`, `keys()`, and `values()` methods provide
explicit iterators.

```javascript
const letters = ["a", "b"];

for (const [index, letter] of letters.entries()) {
  console.log(index, letter);
}
```

### Typed-array details

Typed arrays have fixed length and convert values to their storage type. They
support numeric operations but do not support methods that change length, such
as `push()`, `pop()`, or `splice()`.

```javascript
const bytes = new Uint8Array([255, 256, -1]);

console.log([...bytes]); // [255, 0, 255]
```

For binary data, a typed-array view can share an `ArrayBuffer`:

```javascript
const buffer = new ArrayBuffer(4);
const view = new Uint32Array(buffer);
view[0] = 42;

console.log(view[0]); // 42
```

### Performance considerations

- `push()` and `pop()` are generally efficient for stack-like operations.
- Repeated `shift()` and `unshift()` can be slower because other indexes may
  need to move.
- Use `Set` for frequent membership checks when uniqueness is required.
- Use `Map` when data is naturally keyed rather than position-based.
- Avoid creating many unnecessary intermediate arrays in performance-critical
  code; a single loop can combine several operations when profiling shows it
  matters.
- Prefer readable code first, then measure with profiling before optimizing.

## 8. Method Summary

| Method | Changes original? | Returns |
| --- | --- | --- |
| `push()` | Yes | New length |
| `pop()` | Yes | Removed last element |
| `shift()` | Yes | Removed first element |
| `unshift()` | Yes | New length |
| `slice()` | No | Shallow copied array |
| `splice()` | Yes | Removed elements |
| `concat()` | No | Combined array |
| `includes()` | No | Boolean |
| `indexOf()` | No | Index or `-1` |
| `map()` | No | New transformed array |
| `filter()` | No | New matching array |
| `reduce()` | No | Accumulated value |
| `find()` | No | First matching value or `undefined` |
| `findIndex()` | No | First matching index or `-1` |
| `some()` | No | Boolean |
| `every()` | No | Boolean |
| `forEach()` | No | `undefined` |

## 9. Choosing the Right Method

- Add to the end: `push()`
- Remove from the end: `pop()`
- Add to the beginning: `unshift()`
- Remove from the beginning: `shift()`
- Insert, remove, or replace at a position: `splice()`
- Copy a section: `slice()`
- Join arrays: `concat()`
- Check for a value: `includes()`
- Get a value's position: `indexOf()`
- Transform every item: `map()`
- Keep matching items: `filter()`
- Calculate one result: `reduce()`
- Get the first matching item: `find()`
- Get the first matching position: `findIndex()`
- Check whether at least one matches: `some()`
- Check whether all match: `every()`
- Perform an action for every item: `forEach()`

## 10. Important Notes

1. Methods such as `map()`, `filter()`, and `forEach()` skip empty slots in a
   sparse array.
2. `slice()`, `concat()`, and these callback methods create shallow results;
   they do not deeply clone nested objects.
3. Do not use `forEach()` when a returned array or accumulated value is needed.
4. Use `===` comparisons or `includes()` intentionally: `indexOf()` cannot
   find `NaN`.
5. Prefer `const` for an array variable when the variable will not be
   reassigned. The array can still be modified with `push()` or `splice()`.

## 11. Summary

Arrays store ordered collections of values. JavaScript supports normal,
nested, mixed, sparse, and typed-array forms, although the normal `Array` is
the most common. Array methods can mutate an array, create a new array,
search for values, test conditions, or process every element. Choosing the
method based on its return value and mutation behavior helps make code
predictable and readable.
