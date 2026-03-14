# Conditional Statements in TypeScript

This folder contains examples demonstrating conditional statements in TypeScript.

Conditional statements allow a program to make decisions and execute different blocks of code depending on whether a condition is true or false.

They are a fundamental part of programming and are used to control the flow of execution.

---

## if Statement

The `if` statement executes a block of code only when a specified condition is true.

Example:
```
let age: number = 18
if (age >= 18) {
    console.log("You are an adult")
}
```
---

## if...else Statement

The `if...else` statement allows the program to choose between two possible outcomes.

Example:
```
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
```
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
```
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
```
let age: number = 20
let result = age >= 18 ? "Adult" : "Minor"
console.log(result)
```
It is useful for simple conditions but should not replace complex `if` statements.

---

## Summary

Conditional statements help control the flow of a program by executing code based on conditions.

Common conditional structures include:

* if
* if...else
* else if
* switch
* ternary operator

These are essential tools for implementing logic in programs.
