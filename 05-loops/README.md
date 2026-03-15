# Loops in TypeScript

This folder contains examples demonstrating loops in TypeScript.

Loops allow a program to execute a block of code multiple times until a specified condition is met. They are commonly used when working with arrays, collections, or repetitive tasks.

---

## for Loop

The `for` loop is commonly used when the number of iterations is known beforehand.

Example:
```typescript
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
```typescript
let i: number = 0
while (i < 5) {
    console.log(i)
    i++
}
```
This loop is useful when the number of iterations is not known beforehand.

**`Warning:`** Always ensure the condition eventually becomes false to avoid an infinite loop.

---

## do...while Loop

The `do...while` loop executes the code block **at least once**, even if the condition is false.

Example:
```typescript
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
```typescript
const numbers = [1, 2, 3]
for (const num of numbers) {
    console.log(num)
}
```
---

## for...in Loop

The `for...in` loop is used to iterate over the **keys (properties) of an object**.

Example:
```typescript
const user = {
    name: "Homo Sapiens",
    planet: "Earth"
}

for (const key in user) {
    console.log(key)
}
```
---

## Loop Control: break and continue

These keywords give you fine-grained control over your loops.

**`break:`** Exits the loop completely.  
**`continue:`** Skips the current iteration and jumps to the next one.

Example:
```typescript
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // Skips 3
    if (i === 5) break;    // Stops the loop at 5
    console.log(i); // Output: 1, 2, 4
}
```
---
## Summary

Loops are essential for handling repetitive tasks and processing data collections. Choosing the right loop depends on your data source:

* `for` → Use when you know exactly how many times the loop should run (counter-based).
* `while` → Use when the loop depends on a condition that may change dynamically (logic-based).
* `do...while` → Use when the code block must execute at least once.
* `for...of` → The modern choice for iterating through Array values.
* `for...in` → Specifically for iterating through Object keys.
* `Loop Control` → Use break to stop and continue to skip, giving you full control over the execution flow.

**Note**: In modern JavaScript/TypeScript, `for...of` is generally preferred over
traditional loops when iterating arrays because it is more readable.