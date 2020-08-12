## Written Exam

What is, and how can you use the **spread syntax** `(...)` in JavaScript?

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.

Spread syntax allow users to expand iterable expression or strings and return individual elements

var a=[1,2];
var b=[1,2,3]
a.push(...b)
console.log(a)

then the returned anser should be [1,2,1,2,3]