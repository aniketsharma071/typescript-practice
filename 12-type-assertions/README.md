# Type Assertions in TypeScript

This folder contains examples demonstrating how type assertions work in TypeScript.

Type assertions tell TypeScript how to treat a value when you, as the developer, know more about the type than the compiler can infer.

---

## `as` Syntax

The `as` keyword is the most common way to assert a type in modern TypeScript.

Example:
```typescript
const value: unknown = "Homo Sapiens"
const length = (value as string).length

console.log(length)
```
This helps when a value starts as `unknown` and you need to use a specific type safely.

---

## Non-Null Assertion (`!`)

The non-null assertion operator `!` tells TypeScript that a value is not `null` or `undefined` at that point.

Example:
```typescript
function printLength(text?: string) {
	console.log(text!.length)
}

printLength("Homo Sapiens")
```
Use this carefully, because it removes compiler checks and can cause runtime errors if the value is actually missing.

---

## Const Assertions (`as const`)

`as const` makes values readonly and preserves literal types instead of widening them.

Example:
```typescript
const config = {
	mode: "production",
	retries: 3,
} as const

// config.mode is "production" (literal type), not string
```
This is useful when defining fixed configuration objects and immutable data.

---

## Double Assertion

A double assertion converts one type to another through `unknown`.

Example:
```typescript
type User = {
	name: string
}

const raw = "{\"name\":\"HomoSapiens\"}"
const user = JSON.parse(raw) as unknown as User

console.log(user.name)
```
This technique is powerful but risky, and should be used only when necessary.

---

## Angle-Bracket Assertion Syntax

Type assertions can also be written using angle brackets, though this style is less common and conflicts with JSX syntax.

Example:
```typescript
const value: unknown = "TypeScript"
const text = <string>value

console.log(text.toUpperCase())
```
In `.tsx` files, prefer `as` syntax to avoid parsing issues.

---

## Summary

Type assertions are useful when TypeScript cannot infer enough type information, but they should be used with care.

Key takeaways:

* Use `as` syntax for most type assertions.
* Use non-null assertions (`!`) only when you are certain a value exists.
* Use `as const` to keep literal types and readonly object properties.
* Use double assertions sparingly, since they bypass type safety.
* Prefer `as` over angle-bracket syntax, especially in JSX/TSX projects.

These patterns help you balance flexibility and safety when working with uncertain or dynamic values in TypeScript.
