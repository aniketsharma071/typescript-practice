
// 1. Basic typeof narrowing

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase())
  } else {
    console.log("Number:", value.toFixed(2))
  }
}

printValue("hello")
printValue(42)

// 2. Multiple typeof checks

function processValue(value: string | number | boolean) {
  if (typeof value === "string") {
    console.log("String length:", value.length)
  } else if (typeof value === "number") {
    console.log("Squared:", value * value)
  } else {
    console.log("Boolean:", value ? "true" : "false")
  }
}

processValue("TypeScript")
processValue(10)
processValue(true)

// 3. typeof with unknown

function handleUnknown(value: unknown) {
  if (typeof value === "string") {
    console.log("Uppercase:", value.toUpperCase())
  } else if (typeof value === "number") {
    console.log("Fixed:", value.toFixed(2))
  } else {
    console.log("Unknown type")
  }
}

handleUnknown("hello")
handleUnknown(3.14)
handleUnknown({})

// 4. typeof null 

function checkNull(value: object | null) {
  if (typeof value === "object") {
    console.log("Value is object (or null):", value) // will also run for null
  }
}

checkNull(null)

function checkNullSafely(value: object | null) {
  if (value !== null && typeof value === "object") {
    console.log("Safe object:", value)
  } else {
    console.log("Value is null")
  }
}

checkNullSafely(null)

// 5. typeof supported types

function showType(value: any) {
  console.log(typeof value)
}

showType("text")        // string
showType(123)           // number
showType(true)          // boolean
showType(undefined)     // undefined
showType(Symbol())      // symbol
showType(10n)           // bigint
showType({})            // object

