// double-assertion VERY UNSAFE — use only when absolutely necessary

// 1. Basic example

let value: string = "123"
let num = value as unknown as number

console.log(num)          // "123"
console.log(typeof num)   // string 

// 2. Why it works

// Step 1: value → unknown
// Step 2: unknown → number

// TypeScript allows both steps separately

// 3. Example with objects

type User = { name: string }
type Admin = { name: string; role: string }

let user: User = { name: "Homo Sapiens" }
let admin = user as unknown as Admin

console.log(admin.role) // undefined 

// 4. Real danger (runtime mismatch)

let data: unknown = "Homo Sapiens"
let forcedNumber = data as unknown as number

// TypeScript thinks it's number
// But it's actually string
console.log(forcedNumber + 10) // "Homo Sapiens10" 

// 5. When is it used?

// Rare cases:
// - interacting with poorly typed libraries
// - migration from JavaScript
// - temporary workaround

// 6. Better alternatives

// Avoid this
let unsafe = "123" as unknown as number

// Use parsing instead
let safe = Number("123")

// 7. Prefer type guards instead

function safeProcess(value: unknown) {
  if (typeof value === "number") {
    console.log(value + 10)
  }
}

safeProcess(safe)