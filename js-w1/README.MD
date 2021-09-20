Teach how const works (max 2 minutes) -- specifically whether const can be reassigned (see blue circled section above).

- demonstrate/explain why it errors out when you try reassigning a new value to a previously defined const

A constant is a value that cannot be altered by the program during normal execution. It cannot change through re-assignment, and it can't be re-declared. In JavaScript, constants are declared using the const keyword.

```js
const a = 100;
```

- demo/explain why you can still change an object's property even though it was defined as a const

When you're adding to an array or object you're not re-assigning or re-declaring the constant, it's already declared and assigned, you're just adding to the "list" that the constant points to.

```js
const list = [1, 2, 3];
list.push(4);
console.log(list); // [1, 2, 3, 4]
```

- what happens if you try to push/pop an element into/from an array defined as const -- does the array change?

Yes, it changes. The array is re-assigned to a new array. The old array is no longer accessible. The new array is accessible. The new array is the one that's returned.

---

- Teach how template literals work (max 1 min.)
  demo/explain how the backticks (not single quotes), dollar sign / curly braces are all needed

```js
let name = 'David';
let greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, David!

let names = ['David', 'Doe', 'Smith'];

for (let name of names) {
  console.log(`Hello, ${name}!`);
}

// Hello, David!
// Hello, Doe!
// Hello, Smith!
```

---

```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

- what data structure does .map return?

create a loop for each element in the array and return a new array with the new values

- explain the purpose of the function parameter (x)

It is a function parameter that is passed into the map function. Each element in the array is passed into the function and the function returns a new value (2 times the element).

- demonstrate what happens if you don't type out the word 'return' in the above example - explain why is 'return' needed?

We need to return something so that the map function will return something. If we don't return something, the map function will return undefined.

- experiment what happens if you modify the return statement to something like:
  return x \* 3  
  or return x  
  or return `<h1>${x}</h1>`

```js
// *3
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 3);

console.log(map1);
// expected output: Array [3, 12,27, 48]
```

```js
// *3
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x / 3);

console.log(map1);
// expected output: Array [0.3, 1.3, 3, 5.3]
```

```js
// return x
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x);

console.log(map1);
// expected output: Array [1, 4, 9, 16]
```

```js
// return x
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => `<h1>${x}</h1>`);

console.log(map1);
// expected output: Array ['<h1>1</h1>', '<h1>4</h1>', '<h1>9</h1>', '<h1>16</h1>']
```
