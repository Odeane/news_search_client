## Written Exam

What is, and how can you use the **spread syntax** `(...)` in JavaScript?

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.

## What it is

- Used on arrays and strings (iterables)
- Expands an iterable to its individual elements
- Operator consists of 3 dots
- Various use cases such as inside function calls, or extending or creating an iterable/array
- Introduced in the ES6 specification of JavaScript which now makes the code simplier

## Code example
```
function multiply = (a, b, c) => {
  return a * b * c
}

const numbers = [10, 20, 30];
console.log(multiply(...number)), 6000
```

