# Callbacks in TypeScript

This folder contains examples that demonstrate callback patterns in TypeScript.

Callbacks are functions passed as arguments to other functions and executed later.

---

## Basic Callback

A callback can be passed to another function and invoked with a result.

Example:
```typescript
let greet = (name: string, callback: (msg: string) => void) => {
	const message = `Hello, ${name}!`
	callback(message)
}

greet("Homo Sapiens", (msg) => {
	console.log(msg)
})
```

---

## Callback Type Alias

You can define callback signatures with a type alias for cleaner and reusable code.

Example:
```typescript
type Callback = (msg: string) => void

let greet = (name: string, callback: Callback): void => {
	const message = `Hello, ${name}!`
	callback(message)
}
```

---

## Optional Callback

Callbacks can be optional using `?`, allowing a fallback behavior when no callback is provided.

Example:
```typescript
let greet = (name: string, callback?: (msg: string) => void) => {
	const message = `Hello, ${name}!`

	if (callback) {
		callback(message)
	} else {
		console.log(`Welcome, ${name}!`)
	}
}
```

---

## Error-First Callback

A common Node.js-style pattern is error-first callbacks, where the first argument is an error and the second is the result.

Example:
```typescript
type ErrorFirstCallback = (err: Error | null, result: string) => void

let readFile = (filename: string, callback: ErrorFirstCallback): void => {
	const fileContent = `Content of ${filename}`
	callback(null, fileContent)
}
```

---

## Callback Hell

Deeply nested callbacks can reduce readability and make code harder to maintain.

Example:
```typescript
let callbackHell = (): void => {
	setTimeout(() => {
		console.log("First callback executed")
		setTimeout(() => {
			console.log("Second callback executed")
			setTimeout(() => {
				console.log("Third callback executed")
			}, 1000)
		}, 1000)
	}, 1000)
}
```

---

## Summary

Callbacks are a core concept in TypeScript and JavaScript for handling deferred execution.

Key takeaways:

* Basic callbacks pass behavior into functions.
* Type aliases improve callback readability and reusability.
* Optional callbacks support flexible function usage.
* Error-first callbacks are useful for async error handling.
* Nested callbacks can lead to callback hell and should be managed carefully.
