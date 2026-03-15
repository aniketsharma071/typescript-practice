# Array Methods in TypeScript

This folder contains examples of commonly used array methods in TypeScript.

Array methods allow performing operations on arrays such as iterating, transforming, filtering, and reducing data. These methods make code more concise and readable compared to traditional loops.

---

## forEach()

The `forEach()` method executes a callback function for each element of an array.

It is commonly used when performing an action for every element.

Example:
```typescript
let numbers:number[]=[1,2,3,4,6]
numbers.forEach((num:number) => console.log(num))
```
Important:

* `forEach()` does not return a new array.
* It is mainly used for actions like logging or updating values.

---

## map()

The `map()` method creates a new array by transforming each element of the original array.

Example:
```typescript
let nums:number[]=[1,2,3,4,5]
const numbers:number[]=nums.map((num:number) => num*10)
console.log(numbers)
```

Important:

* `map()` always returns a new array.

---

## filter()

The `filter()` method creates a new array containing elements that satisfy a condition.

Example:
```typescript
const users =[
    {
        species: "Homo Sapiens",
        habitat: "Earth",
        intelligenceLevel: 9
    },
    {
        species: "Species-A12B",
        habitat: "Planet-B06S",
        intelligenceLevel: 4
    },
    {
        species: "Wookiee",
        habitat: "Kashyyyk",
        intelligenceLevel: 8
    },
];
const details = users.filter((user) => user.intelligenceLevel>=5)
console.log(details)
```
---

## reduce()

The `reduce()` method processes all elements of an array and reduces them to a single value.

Example:
```typescript
let nums:number[]=[1,2,3,4,5,6,7,8,9,10]
const sum:number=nums.reduce((acc:number, num:number) => acc+num,0)
console.log(sum)
```
`0` at the end in `accumulator` is the starting point.

---

## Method Chaining

Array methods can be combined together in a chain to perform multiple operations in sequence.

Example:
```typescript
const users =[
    {
        species: "Homo Sapiens",
        habitat: "Earth",
        intelligenceLevel: 9
    },
    {
        species: "Species-A12B",
        habitat: "Planet-B06S",
        intelligenceLevel: 4
    },
    {
        species: "Wookiee",
        habitat: "Kashyyyk",
        intelligenceLevel: 8
    },
];
const details = users
    .filter(user => user.intelligenceLevel >=5)
    .map(user => user.species)

console.log(details)
```
This example:

1. Filters species with high intelligence levels
2. Extracts their species names.

---

## Summary

Common array methods in TypeScript include:

* `forEach()` → executes a function for each element in the array
* `map()` → transforms each element and returns a new array
* `filter()` → returns a new array containing elements that match a condition
* `reduce()` → processes all elements and combines them into a single result
* `Method Chaining` → allows multiple array operations to be linked together in a clean and readable way

`Note:` Methods like `map`, `filter`, and `reduce` do **not modify the original array**; they return a new array instead.

These methods are widely used in modern JavaScript and TypeScript to efficiently process and transform collections of data.