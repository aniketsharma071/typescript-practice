# Interfaces in TypeScript

This folder contains examples demonstrating how interfaces work in TypeScript.

Interfaces help define the structure of objects, improve type safety, and make code easier to read and maintain.

---

## Basic Interface

Interfaces can define the shape of an object with required properties.

Example:
```typescript
interface Specie {
    species: string,
    habitat: string,
    intelligenceLevel: number,
    isExtinct: boolean
}

const human: Specie = {
    species: "Homo Sapiens",
    habitat: "Earth",
    intelligenceLevel: 9,
    isExtinct: false
}
```

---

## Readonly Properties

The `readonly` keyword prevents a property from being changed after initialization.

Example:
```typescript
interface Species {
    readonly species: string,
    habitat: string,
    intelligenceLevel: number
}

const human: Species = {
    species: "Homo Sapiens",
    habitat: "Earth",
    intelligenceLevel: 9
}
```

---

## Optional Properties

Properties can be marked optional using `?`.

Example:
```typescript
interface Species {
  species: string,
  habitat?: string,
  intelligenceLevel: number
}

const unknown: Species = {
  species: "Unknown Entity",
  intelligenceLevel: 6
}
```

---

## Interface Methods

Interfaces can also define method signatures inside object types.

Example:
```typescript
interface Species {
    species: string,
    habitat: string
    intelligenceLevel: number,
    describe(): string
}

const human: Species = {
    species: "Homo Sapiens",
    habitat: "Earth",
    intelligenceLevel: 9,
    describe() {
        return `This is a ${this.species} from ${this.habitat} with an intelligence level of ${this.intelligenceLevel}.`
    },
}
```

---

## Interface in Functions

Interfaces can be used as parameter types for functions.

Example:
```typescript
interface Species {
    species: string,
    habitat: string,
    intelligenceLevel: number
}

function describeSpecies(species: Species): string {
    return `The ${species.species} is a species that lives in ${species.habitat} and has an intelligence level of ${species.intelligenceLevel}.`
}
```

---

## Interface with Arrays

Interfaces can define the shape of objects inside arrays.

Example:
```typescript
interface Species {
    species: string,
    habitat: string,
    intelligenceLevel: number
}

const speciesList:Species[] = [
    {
        species: "Homo Sapiens",
        habitat: "Earth",
        intelligenceLevel: 9
    },
    {
        species: "Wookiee",
        habitat: "Kashyyyk",
        intelligenceLevel: 8
    }
]
```

---

## Interface Extension

An interface can extend another interface to reuse and build on existing properties.

Example:
```typescript
interface Species {
    species: string,
    habitat: string
}

interface advanceSpecies extends Species {
    intelligenceLevel: number
}

const human: advanceSpecies = {
    species: "Homo Sapiens",
    habitat: "Earth",
    intelligenceLevel: 9
}
```

---

## Interface Merging

Interfaces with the same name are automatically merged in TypeScript.

Example:
```typescript
interface Species {
    species: string
}
interface Species {
    habitat: string
}
interface Species {
    intelligenceLevel: number
}

const human: Species = {
    species: "Homo Sapiens",
    habitat: "Earth",
    intelligenceLevel: 9
}
```

---

## Difference Between `type` and `interface`

Both `type` and `interface` are used to define custom types, but their common use cases differ.

### Use `interface` when:

* Defining object structures
* Working with class-like design
* Needing declaration merging

Example:
```typescript
interface Species {
    species: string,
    habitat: string,
    intelligenceLevel: number
}
```

### Use `type` when:

* Creating unions (`|`) and intersections (`&`)
* Building aliases for primitives, tuples, and complex combinations

Example:
```typescript
type Intelligence = number | string
type SpecieHabitat = { species: string } & { habitat: string }
```

In short:

* **`interface`** → best for object contracts and extensible structures
* **`type`** → best for unions/intersections and flexible type composition

---

## Summary

Interfaces in TypeScript make object modeling safer and clearer.

Key takeaways:

* Define object structure using interfaces
* Use `readonly` to protect immutable properties
* Use optional properties (`?`) for flexible object shapes
* Add methods inside interfaces for behavior contracts
* Reuse interfaces in functions and arrays
* Extend interfaces for scalable models
* Use interface merging when needed
* Prefer `interface` for object contracts and `type` for unions/intersections

These patterns help write cleaner, maintainable, and strongly typed TypeScript code.