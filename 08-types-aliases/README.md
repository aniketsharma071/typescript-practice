# Type Aliases in TypeScript

This folder contains examples demonstrating how type aliases work in TypeScript.

Type aliases help give meaningful names to custom types, making code more readable, reusable, and easier to maintain.

---

## Basic Type Alias

You can assign a custom name to a primitive type.

Example:
```typescript
type intelligenceLevel = number
let humanIntelligence: intelligenceLevel = 9
let martainIntelligence: intelligenceLevel = 7
```
This improves readability by replacing repeated primitive type declarations with a domain-specific name.

---

## Object Type Alias

Type aliases are useful for defining object shapes.

Example:
```typescript
type Species = {
	species: string
	habitat: string
	intelligenceLevel: number
}

let humans: Species = {
	species: "Homo Sapiens",
	habitat: "Earth",
	intelligenceLevel: 9
}
```
This ensures that all required object properties are present with correct types.

---

## Array Type Alias

Type aliases can be used with arrays of objects.

Example:
```typescript
type Species = {
	species: string
	habitat: string
	intelligenceLevel: number
}

const specieList: Species[] = [
	{
		species: "Homo Sapiens",
		habitat: "Earth",
		intelligenceLevel: 9
	},
	{
		species: "Martian",
		habitat: "Mars",
		intelligenceLevel: 7
	}
]
```
This keeps array elements consistent and strongly typed.

---

## Nested Types

Type aliases can include other type aliases to model nested structures.

Example:
```typescript
type Habitat = {
	planet: string
	coordinate: [number, number]
}

type Species = {
	species: string
	habitat: Habitat
	intelligenceLevel: number
}
```
Nested aliases make complex data models clearer and easier to scale.

---

## Optional Properties

Properties can be marked optional using `?`.

Example:
```typescript
type Species = {
	species: string
	habitat?: string
	intelligenceLevel: number
}

const unknownSpecies: Species = {
	species: "Unknown Entity",
	intelligenceLevel: 6
}
```
This allows flexibility when some data may be missing.

---

## Readonly Properties

The `readonly` keyword prevents a property from being changed after initialization.

Example:
```typescript
type Species = {
	readonly species: string
	habitat: string
	intelligenceLevel: number
}

let humans: Species = {
	species: "Homo Sapiens",
	habitat: "Earth",
	intelligenceLevel: 9
}

// humans.species = "Hominidae" // Not allowed
```
Readonly properties are useful for protecting values that should remain constant.

---

## Type Reuse

A single alias can be reused across arrays, function parameters, and other parts of the code.

Example:
```typescript
type Species = {
	species: string
	habitat: string
	intelligenceLevel: number
}

function printSpecies(entity: Species): void {
	console.log(`Species: ${entity.species}`)
}
```
Reusing types reduces duplication and keeps your code consistent.

---

## Summary

Type aliases in TypeScript make code cleaner, more expressive, and easier to manage.

Key takeaways:

* Use aliases to name primitive and custom object types.
* Reuse aliases across variables, arrays, and functions.
* Model complex structures using nested type aliases.
* Add flexibility with optional properties (`?`).
* Protect important fields with `readonly`.

These patterns help build safer and more maintainable TypeScript applications.
