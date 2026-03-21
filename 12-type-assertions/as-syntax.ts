// 1. Basic example

let value: unknown = "Homo Sapiens"

let length = (value as string).length
console.log(length)

// 2. Assertion with union types

let input: string | number = "Homo Sapiens"

let upper = (input as string).toUpperCase()
console.log(upper)

// 3. Assertion with unknown

function process(value: unknown) {
  let str = value as string
  console.log(str.toUpperCase())
}

process("Homo Sapiens")

// Risky if value is not actually a string
// process(123) // runtime error

// 4. Assertion vs Narrowing 

function safeProcess(value: unknown) {
  if (typeof value === "string") {
    // safer approach
    console.log(value.toUpperCase())
  }
}
safeProcess("Homo Sapiens")

// 5. Real-world example (DOM)

// Example: getting input element
// const inputElement = document.getElementById("username") as HTMLInputElement

// if (inputElement) {
//   console.log(inputElement.value)
// }

// 6. Assertion does NOT change runtime type

let data = "123" as unknown as number

// TypeScript thinks it's a number
// But actually it's still a string
console.log(typeof data) // string