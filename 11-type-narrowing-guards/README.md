# Type Narrowing and Guards in TypeScript

This folder contains examples demonstrating how type narrowing and type guards work in TypeScript.

Type narrowing helps TypeScript figure out the exact type of a value inside a condition, which makes code safer and easier to write.

---

## `typeof` Guards

The `typeof` operator is useful when working with primitive types such as `string`, `number`, and `boolean`.

Example:
```typescript
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase())
  } else {
    console.log("Number:", value.toFixed(2))
  }
}
```
This allows TypeScript to safely narrow the value based on its runtime type.

---

## Truthiness Narrowing

Truthiness checks narrow values based on whether they are truthy or falsy.

Example:
```typescript
function printLength(value: string | null) {
  if (value) {
    console.log("Length:", value.length)
  } else {
    console.log("Value is null or empty")
  }
}
```
This is convenient, but it is important to remember that values like `""`, `0`, and `false` are also falsy.

---

## `in` Operator

The `in` operator checks whether a property exists on an object and helps narrow between object types.

Example:
```typescript
type Dog = { bark: () => void }
type Cat = { meow: () => void }

function speak(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark()
  } else {
    animal.meow()
  }
}
```
This is especially useful when working with unions of object types.

---

## `instanceof` Guards

The `instanceof` operator is used with classes and built-in objects like `Date` and `Error`.

Example:
```typescript
function printValue(value: Date | string) {
  if (value instanceof Date) {
    console.log("Year:", value.getFullYear())
  } else {
    console.log("String:", value.toUpperCase())
  }
}
```
This works only with real class instances, not with interfaces or plain type aliases.

---

## Discriminated Unions

Discriminated unions use a shared literal property such as `kind` or `status` to narrow object types safely.

Example:
```typescript
type Circle = {
  kind: "circle"
  radius: number
}

type Square = {
  kind: "square"
  side: number
}

type Shape = Circle | Square

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2
    case "square":
      return shape.side ** 2
  }
}
```
This is one of the most common and reliable patterns for narrowing complex object unions.

---

## Exhaustiveness Checking

Exhaustiveness checking ensures all possible cases in a union are handled.

Example:
```typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2
    case "square":
      return shape.side ** 2
    default:
      const _exhaustive: never = shape
      return _exhaustive
  }
}
```
Using `never` helps TypeScript warn you when a new union member is added but not handled.

---


## Summary

Type narrowing and guards help TypeScript understand values more precisely at runtime checks.

Key takeaways:

* Use `typeof` for primitive type checks.
* Use truthiness checks carefully because falsy values may still be valid data.
* Use the `in` operator to narrow between object types based on property existence.
* Use `instanceof` for classes and built-in objects like `Date`.
* Use discriminated unions for safer object-type narrowing.
* Use exhaustiveness checks with `never` to catch missing cases.
* Prefer `interface` for extensible object contracts and `type` for unions and flexible type composition.

These patterns make TypeScript code safer, clearer, and easier to maintain.
