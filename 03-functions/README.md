# Functions in TypeScript

This folder contains examples demonstrating how functions work in TypeScript.

Functions allow us to create reusable blocks of code. In TypeScript, functions can also have **type-safe parameters and return values**, which helps prevent bugs and improves code readability.

---

## Basic Functions

In TypeScript, you can specify the type of each parameter and the return type of the function.

Example:
```typescript
function greet(name: string): string {
    return `Hello ${name}`
}
```
Here:

* `name: string` defines the type of the parameter.
* `: string` after the parentheses defines the return type.

---

## Void Functions

The `void` type is used when a function does not return any value.

Example:
```typescript
function logMessage(message: string): void {
    console.log(message)
}
```
This function performs an action but does not return anything.

---

## Optional Parameters

Optional parameters allow a function to accept arguments that may or may not be provided.

They are defined using `?`.

Example:
```typescript
function greet(name: string, age?: number) {
if (age) {
    return `Hello ${name}, age ${age}`
}
    return `Hello ${name}`
}
```
If `age` is not passed, the function still works.

---

## Default Parameters

Default parameters allow assigning a default value if the argument is not provided.

Example:
```typescript
function greet(name: string = "Guest") {
    return `Hello ${name}`
}
```
If no value is passed, `"Guest"` is used automatically.

---

## Rest Parameters

Rest parameters allow passing multiple values to a function as an array.

Example:
```typescript
function sum(...numbers: number[]): number {
    let total = 0
    for (let num of numbers) {
        total += num
    }
    return total
}
```
This allows the function to accept any number of arguments.

---

## Function Types

Functions themselves can have types. This is useful when assigning functions to variables.

Example:
```typescript
let greet: (name: string) => string
greet = function(name: string) {
    return `Hello ${name}`
}
```
This ensures that the function assigned to `greet` follows the correct signature.

---

## Arrow Functions

Arrow functions provide a shorter and cleaner syntax for writing functions.

Example:
```typescript
const greet = (name: string): string => {
    return `Hello ${name}`
}
```
Arrow functions are commonly used in modern JavaScript and TypeScript.

---

## Function Overloads

Function overloads allow defining multiple function signatures for different parameter types.

Example:
```typescript
function combine(a: number, b: number): number
function combine(a: string, b: string): string
function combine(a: number | string, b: number | string) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b
    }
    return (a as number) + (b as number)
}
```
Overloads help TypeScript understand how the function behaves depending on the input types.

---

## Callback Functions

A callback function is a function that is passed as an argument to another function and executed later.

Callbacks are commonly used when one function needs to perform an action after another function completes its work.

Example:
```typescript
function greet(name: string, callback: (message: string) => void): void {
    const message = `Hello ${name}`
    callback(message)
}
function printMessage(message: string): void {
    console.log(message)
}
greet("Homo Sapiens", printMessage)
```
In this example:

* `printMessage` is the callback function.
* It is passed to `greet` as an argument.
* `greet` executes the callback after creating the message.

Callbacks are widely used in JavaScript and TypeScript, especially in:

* asynchronous programming
* event handling
* array methods like `map`, `filter`, and `forEach`.

## Summary

Functions in TypeScript help organize code into reusable and type-safe blocks.

Key features include:

* **Typed Parameters** → Ensures arguments passed to functions match expected types.
* **Return Types** → Specifies what type of value a function returns.
* **Optional and Default Parameters** → Allow flexible function arguments.
* **Rest Parameters** → Enable functions to accept a variable number of arguments.
* **Function Types** → Ensure functions assigned to variables follow a specific signature.
* **Arrow Functions** → Provide a concise and modern syntax for writing functions.
* **Function Overloads** → Allow a function to behave differently depending on input types.
* **Callback Functions** → Enable functions to be passed as arguments and executed later.

These features make TypeScript functions safer, more predictable, and easier to maintain.
