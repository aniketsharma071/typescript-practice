# Generics in TypeScript

This folder contains examples demonstrating how generics work in TypeScript.

Generics help write reusable and type-safe code by allowing types to be passed as parameters.

---

## Basic Generics

A generic function can accept different types while preserving type safety.

Example:
```typescript
let identity = <T>(arg: T): T => {
	return arg;
}

let output = identity<string>("Homo Sapiens");
let output2 = identity<number>(100);
```

---

## Generic Functions with Multiple Types

Generics can use multiple type parameters to work with different value types together.

Example:
```typescript
let pair = <T, U>(first: T, second: U): [T, U] => {
	return [first, second];
}

let result = pair<string, number>("Hello", 42);
```

---

## Generic Arrays

Generics can be used with arrays to keep element types consistent.

Example:
```typescript
let numbers = <T>(arr: T[]): T[] => {
	return arr;
}

let result = numbers<number>([1, 2, 3, 4, 5]);
```

---

## Generic Interfaces

Interfaces can also accept generic type parameters.

Example:
```typescript
interface Pair<T, U> {
	first: T;
	second: U;
}

let pair: Pair<string, number> = {
	first: "Hello",
	second: 42
};
```

---

## Generic Classes

Classes can be made generic so they can store and manage different data types.

Example:
```typescript
class Storage<T> {
	private data: T[] = []

	add(item: T) {
		this.data.push(item)
	}
}

let storage = new Storage<string>();
storage.add("Hello, world!");
```

---

## Generic Constraints

Constraints allow limiting generic types to those that match a required shape.

Example:
```typescript
function printLength<T extends { length: number }>(item: T) {
	console.log(item.length)
}

printLength("Hello, world!");
printLength([1, 2, 3, 4, 5]);
```

---

## `keyof` with Generics

The `keyof` keyword with generics ensures that only valid object keys can be used.

Example:
```typescript
let getKey = <T, K extends keyof T>(obj: T, key: K) => {
	return obj[key];
};
```

---

## Default Generic Types

Generic type parameters can have default types when no type is explicitly provided.

Example:
```typescript
type ApiResponse<T = string> = {
	data: T
	success: boolean
}

let response: ApiResponse<number> = {
	data: 42,
	success: true
}

let defaultResponse: ApiResponse = {
	data: "Default data",
	success: true
}
```

---

## Summary

Generics in TypeScript allow writing flexible and reusable code without losing type safety.

Key takeaways:

* Generic functions work with multiple data types safely.
* Multiple type parameters (`T`, `U`) support mixed-type operations.
* Generic arrays ensure consistent element typing.
* Generic interfaces and classes help build reusable structures.
* Constraints (`extends`) restrict allowed generic types.
* `keyof` with generics provides safe dynamic property access.
* Default generic types reduce boilerplate when a common type is expected.

These patterns make TypeScript code more scalable, maintainable, and strongly typed.
