# TypeScript Revision Notes

This folder contains revision examples that quickly recap the core TypeScript concepts covered in previous folders.

These notes combine types, functions, control flow, array methods, and advanced typing features in one place for fast practice.

---

## Basic Types

TypeScript allows explicit type annotations for primitives.

Example:
```typescript
let age: number
let userName: string
let isInstructor: boolean
```

---

## Arrays and Tuples

Arrays store multiple values of the same type, while tuples store fixed-position values with specific types.

Example:
```typescript
let hobbies: string[]
hobbies = ["Sports", "Cooking"]

let role: [number, string]
role = [2, "author"]
```

---

## Functions

Functions can define both parameter types and return types.

Example:
```typescript
function add(a: number, b: number): number {
	return a + b
}
```

---

## Conditional Statements

Revision includes common decision-making patterns like `if`, `if...else`, `else if`, and `switch`.

Example:
```typescript
if (hobbies[0] === "Sports") {
	console.log("Hobby is sports")
} else if (hobbies[0] === "Cooking") {
	console.log("Hobby is cooking")
} else {
	console.log("Hobby is something else")
}

switch (hobbies[0]) {
	case "Sports":
		console.log("Hobby is sports")
		break
	case "Cooking":
		console.log("Hobby is cooking")
		break
	default:
		console.log("Hobby is something else")
}
```

---

## Loops and Array Methods

This revision practices iteration and common transformation methods.

Example:
```typescript
for (let hobby of hobbies) {
	console.log(hobby)
}

hobbies.map(hobby => {
	console.log(hobby.toUpperCase())
})

const filteredHobbies = hobbies.filter(hobby => hobby === "Sports")
const totalLength = hobbies.reduce((acc, hobby) => acc + hobby.length, 0)
```

---

## Type Aliases

Type aliases help define reusable custom structures.

Example:
```typescript
type Person = {
	name: string
	age: number
}
```

---

## Union and Intersection Types

Union types allow multiple possible value types, and intersection types combine multiple type definitions.

Example:
```typescript
let course: string | number = "React - The Complete Guide"
course = 12341

type A = {
	name: string
}

type B = {
	age: number
}

type C = A & B
```

---

## Interfaces

Interfaces define object contracts with required properties.

Example:
```typescript
interface User {
	name: string
	age: number
}
```

---

## Type Narrowing and Type Guards

Type guards make union handling safer by narrowing values before use.

Example:
```typescript
function printUserInfo(user: User | string) {
	if (typeof user === "string") {
		console.log("User name: " + user)
	} else {
		console.log("User name: " + user.name)
		console.log("User age: " + user.age)
	}
}

function isUser(obj: any): obj is User {
	return "name" in obj && "age" in obj
}
```

---

## Type Assertions

Type assertions tell TypeScript to treat a value as a specific type when you know more than inferred.

Example:
```typescript
let someValue: any = "This is a string"
let strLength: number = (someValue as string).length
```

---

## Summary

This revision file brings together key TypeScript foundations and intermediate concepts in one quick-reference module.

Key takeaways:

* Use primitive type annotations for safer variables.
* Work with arrays and tuples for structured collections.
* Add type-safe parameters and return types in functions.
* Use conditionals and loops to control execution flow.
* Apply `map`, `filter`, and `reduce` for array processing.
* Create reusable models with `type` aliases and `interface`.
* Use unions and intersections for flexible and combined types.
* Narrow union values using guards like `typeof` and `in`.
* Use type assertions carefully when inference is not enough.

These revision notes help reinforce TypeScript fundamentals for interviews, projects, and daily development.
