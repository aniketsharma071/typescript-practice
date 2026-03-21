// 1. Basic example

function printLength(text?: string) {
  console.log(text!.length)
}

printLength("Homo Sapiens")

// Dangerous: printLength(undefined) → runtime error

// 2. With variables

let value: string | null = "TypeScript"

let length = value!.length
console.log(length)

// 3. Safer alternative 

function safePrint(text?: string) {
  if (text !== undefined) {
    console.log(text.length)
  } else {
    console.log("No value provided")
  }
}
safePrint("Homo Sapiens")   
safePrint(undefined)

// 4. Common use case (DOM)

// const input = document.getElementById("username")!

// console.log(input)

// If element doesn't exist → runtime error

// 5. Optional chaining vs non-null assertion

let user: { name?: string } = {}

// Risky
// console.log(user.name!.toUpperCase())

// Safer
console.log(user.name?.toUpperCase()) // will return undefined

// Example: after validation
function process(value?: string) {
  if (!value) return

  // Now safe
  console.log(value!.toUpperCase())
}

process("Homo Sapiens")
