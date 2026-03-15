# Arrays and Tuples in TypeScript

This folder contains examples demonstrating how arrays and tuples work in TypeScript.

Arrays and tuples are used to store multiple values while maintaining type safety.

---

## Arrays

Arrays store multiple values of the same type.

Example:
```typescript
let numbers: number[] = [1, 2, 3, 4]
let names: string[] = ["Homo", "Sapiens"]
```
TypeScript ensures that only values of the declared type can be added to the array.

---

## Readonly Arrays

Readonly arrays prevent modification of array elements.

Example:
```typescript
let numbers: readonly number[] = [1, 2, 3]
// numbers.push(4)  // Not allowed
```
---

## Tuples

Tuples allow storing multiple values with different types in a fixed order.

Example:
```typescript
let user: [string, number]
user = ["Homo Sapiens", 19]
```
---

## Optional Tuple Elements

Tuple elements can be optional.

Example:
```typescript
let user: [string, number?] // where number? means number field in optional
user = ["Homo Sapiens"]
```
---

## Readonly Tuples

Readonly tuples prevent modification of tuple elements.

Example:
```typescript
let point: readonly [number, number] = [10, 20]
// point[0] = 5  // Not allowed
```
---

## Difference Between `readonly` and `const`

### Using `readonly`
```typescript
let point: readonly [number, number] = [10, 20]
// point[0] = 5    // Error (cannot modify element)
point = [5, 2]  // Allowed (variable can be reassigned)
```
`readonly` protects the elements but does not prevent reassigning the variable.

---

### Using `const`
```typescript
const point: [number, number] = [10, 20]
point[0] = 5    // Allowed (elements can still change)
// point = [5, 2]  // Error (cannot reassign const variable)
```
`const` prevents reassignment of the variable but does not make the elements immutable.

---

### Using `const` with `readonly`
```typescript
const point: readonly [number, number] = [10, 20]
// point[0] = 5    // Not allowed
// point = [5,2]    // Not allowed
```
This provides the strongest protection.

---

## Summary

Arrays and tuples in TypeScript allow storing multiple values while maintaining strong type safety.

- **Arrays** store multiple values of the same type.
- **Readonly arrays** prevent modification of array elements.
- **Tuples** store a fixed number of elements with different types in a specific order.
- **Optional tuple elements** allow flexibility in tuple structure.
- **Readonly tuples** ensure tuple elements cannot be modified.
- `readonly` protects the elements of arrays or tuples, while `const` prevents reassignment of the variable.
- Combining **`const` and `readonly`** provides the strongest immutability.

These concepts helps write safer and more predictable TypeScript code when working with collections of data.