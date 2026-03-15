# Basic Types in TypeScript

This folder contains examples of TypeScript basic types.

These are the fundamental types used to define variables and function parameters.

---

## Primitive Types

Primitive types represent simple values.

Types:

* string
* number
* boolean

Example:  
```typescript
let name: string = "Homo Sapiens"  
let age: number = 19  
let isStudent: boolean = true
```
---

## Any

The `any` type disables type checking.

Example:  
```typescript
let data: any = 10  
data = "hello"
```


---

## Unknown

Safer alternative to `any`. Type checking is required before using the value.

Example:  

```typescript
let value: unknown = "hello"

if (typeof value === "string") {  
    console.log(value.toUpperCase())  
}
```
---

## Void

Used for functions that do not return anything.

Example:
```typescript
function greet(): void {
    console.log("Hello")
}
```
---

## Never

Represents values that never occur.

Used in:

* functions that always throw errors
* infinite loops

Example:
```typescript
function throwError(msg: string): never {
    throw new Error(msg)
}
```
## Type Annotation

Type annotations allow you to explicitly define the type of a variable.

Example:
```typescript
let age: number = 19
let username: string = "Homo Sapiens"
```
TypeScript will check that the assigned value matches the declared type.

---

## Enum

Enums allow defining a set of named constants.

Example:
```typescript
enum Direction {
Up,
Down,
Left,
Right
}
```
Enums improve readability when working with fixed values.

---

## Null and Undefined

These represent the absence of a value.

Example:
```typescript
let data: null = null
let value: undefined = undefined
```
They are commonly used when a variable may not have a value yet.

---

## Symbol

A symbol is a unique and immutable primitive value.

Example:
```typescript
let id: symbol = Symbol("id")
```
Symbols are often used as unique object property keys.

---

## BigInt

BigInt is used for integers larger than the safe limit of the JavaScript `number` type.

Example:
```typescript
let bigNumber: bigint = 12345678901234567890n
```
The `n` at the end indicates a BigInt literal.

---

## Summary

Basic types are the foundation of TypeScript’s type system. They allow to define the kind of data a variable or function can work with.

Common basic types include:

* `string` → represents textual data
* `number` → represents numeric values
* `boolean` → represents true/false values
* `any` → disables type checking (use cautiously)
* `unknown` → safer alternative to `any`
* `void` → used for functions that return no value
* `never` → represents values that never occur
* `enum` → defines a set of named constants
* `null` and `undefined` → represent absence of a value
* `symbol` → unique immutable identifier
* `bigint` → supports very large integers

Understanding these basic types is essential for writing safe and predictable TypeScript code.