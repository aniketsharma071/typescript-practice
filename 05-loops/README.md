# Loops in TypeScript

This folder contains examples demonstrating loops in TypeScript.

Loops allow a program to execute a block of code multiple times until a specified condition is met. They are commonly used when working with arrays, collections, or repetitive tasks.

---

## for Loop

The `for` loop is commonly used when the number of iterations is known beforehand.

Example:
```
for (let i: number = 0; i < 5; i++) {
    console.log(i)
}
```
Structure:

* initialization → starting point of the loop
* condition → determines how long the loop runs
* increment/decrement → updates the loop variable

---

## while Loop

The `while` loop executes a block of code as long as the condition remains true.

Example:
```
let i: number = 0
while (i < 5) {
    console.log(i)
    i++
}
```
This loop is useful when the number of iterations is not known beforehand.

---

## do...while Loop

The `do...while` loop executes the code block **at least once**, even if the condition is false.

Example:
```
let i: number = 0
do {
    console.log(i)
    i++
} while (i < 5)
```
---

## for...of Loop

The `for...of` loop is used to iterate over the **values of iterable objects** such as arrays.

Example:
```
const numbers = [1, 2, 3]
for (const num of numbers) {
    console.log(num)
}
```
---

## for...in Loop

The `for...in` loop is used to iterate over the **keys (properties) of an object**.

Example:
```
const user = {
    name: "Homo Sapiens",
    planet: "Earth"
}

for (const key in user) {
    console.log(key)
}
```
---

## Summary

Loops are used to repeat tasks efficiently. Common loop types include:

* for
* while
* do...while
* for...of
* for...in

Each loop is suited for different situations depending on whether you are iterating over numbers, arrays, or object properties.
