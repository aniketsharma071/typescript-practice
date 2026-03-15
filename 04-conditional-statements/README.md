# Conditional Statements in TypeScript

This folder contains examples demonstrating conditional statements in TypeScript.

Conditional statements allow a program to make decisions and execute different blocks of code depending on whether a condition is true or false.

They are a fundamental part of programming and are used to control the flow of execution.

---

## if Statement

The `if` statement executes a block of code only when a specified condition is true.

Example:
```typescript
let age: number = 18
if (age >= 18) {
    console.log("You are an adult")
}
```
---

## if...else Statement

The `if...else` statement allows the program to choose between two possible outcomes.

Example:
```typescript
let age: number = 16
if (age >= 18) {
    console.log("Adult")
} else {
    console.log("Minor")
}
```
---

## else if Statement

When there are multiple conditions to check, `else if` can be used.

Example:
```typescript
let score: number = 85
if (score >= 90) {
    console.log("Grade A")
} else if (score >= 75) {
    console.log("Grade B")
} else {
    console.log("Grade C")
}
```
---

## switch Statement

The `switch` statement is useful when checking a variable against multiple fixed values.

Example:
```typescript
let day: number = 2
switch (day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    default:
        console.log("Invalid day")
}
```
`break` prevents execution from continuing into the next case.

---

## Ternary Operator

The ternary operator provides a shorter way to write simple conditional expressions.

Example:
```typescript
let age: number = 20
let result = age >= 18 ? "Adult" : "Minor"
console.log(result)
```
**Note:** Use the ternary operator only for simple conditions to keep code readable.

---

## Logical Operators
Used to combine multiple conditions into a single check.  

`&& (AND):` Both conditions must be true.  
`|| (OR):` At least one condition must be true.  
`! (NOT):` Reverses the boolean result.

Example:
```typescript
let hasPassport: boolean = true;
let age: number = 20;
if (hasPassport && age >= 18) {
    console.log("Allowed to board the flight");
}
```
---

## Truthy and Falsy Values

In TypeScript, every value has an inherent boolean state when used in a conditional.

---
### Falsy Values (The "False" list)
The following values are always evaluated as **false**:
* `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`.

---
### Truthy Values
**Everything else** is considered **true**. This includes non-zero numbers, non-empty strings, and even empty arrays `[]` or objects `{}`.

### Example: The "Short-circuit" Check
```typescript
let username = ""; // This is Falsy

if (username) {
    console.log("Welcome, " + username);
} else {
    console.log("Please log in."); // This will run!
}
```
---

## Summary

Conditional statements help control the flow of a program by executing code based on conditions.

Common conditional structures include:

* `if` → Executes code when a condition is true.
* `if...else` → Chooses between two possible outcomes.
* `else if` → Allows checking multiple conditions in sequence.
* `switch` → Selects a code block based on a variable’s value.
* `ternary operator (? :)` → A concise way to write simple conditional expressions.

Additional concepts:

* `Logical Operators (&&, ||, !)` → Combine multiple conditions into a single logical expression.
* `Truthy and Falsy Values` → Determine how non-boolean values behave inside conditions.

These are essential tools for implementing logic in programs.
