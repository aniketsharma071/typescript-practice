# Union and Intersection Types in TypeScript

This folder contains examples demonstrating how union and intersection types work in TypeScript.

Union and intersection types help define flexible values, combine object structures, and improve type safety in real-world data models.

---

## Union Types

Union types allow a variable, parameter, or return value to be one of multiple possible types.

Example:
```typescript
type Intelligence = number | string

let intelligenceLevel: Intelligence
intelligenceLevel = 9
intelligenceLevel = "High"
```
This is useful when data can come in more than one valid format.

---

## Union Types with Arrays

Arrays can also use union types when elements may have different valid types.

Example:
```typescript
let intelligenceRecords: (number | string)[] = [9, 8, "Unknown", 7]
```
This keeps arrays type-safe while allowing mixed values.

---

## Union Types in Functions

Function parameters can accept union types for flexible input handling.

Example:
```typescript
function displayIntelligence(level: number | string) {
	console.log(level)
}
```
This avoids using `any` while keeping one function reusable for multiple input types.

---

## Intersection Types

Intersection types combine multiple types into one.

An intersection value must satisfy all combined type definitions.

Example:
```typescript
type Spceis = {
    species: string,
}

type Habitat = {
    habitat: string,
}

type SpecieHabitat = Spceis & Habitat

let Humans:SpecieHabitat = {
    species: "Homo Sapiens",
    habitat: "Earth" 
}
```
This is helpful when you want to merge related object structures.

---

## Discriminated Union of Object Types

Discriminated unions are unions of object types that share a common literal property.

That shared property helps TypeScript narrow the correct type inside conditionals.

Example:

```typescript
type BiologicalSpecies = {
  category: "biological"
  species: string
  habitat: string
  intelligenceLevel: number
}

type ArtificialSpecies = {
  category: "artificial"
  model: string
  originPlanet: string
  processingPower: number
}

type Entity = BiologicalSpecies | ArtificialSpecies
```
This pattern is great for modeling different object variants safely.

---

## Summary

Union and intersection types make TypeScript more expressive and safer when handling different kinds of data.

Key points:

* **Union types (`|`)** allow multiple possible types for a single value.
* **Union arrays** let array elements have different valid types.
* **Union function parameters** make functions flexible without losing type safety.
* **Intersection types (`&`)** combine multiple type definitions into one.
* **Discriminated unions** help TypeScript narrow object types using a shared literal property.

These concepts are essential for writing scalable and strongly typed TypeScript applications.
