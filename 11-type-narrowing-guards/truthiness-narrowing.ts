
// 1. Basic truthy check

function printLength(value: string | null) {
  if (value) {
    console.log("Length:", value.length)
  } else {
    console.log("Value is null or empty")
  }
}

printLength("Hello")
printLength(null)

// 2. Truthiness with multiple types

function process(value: string | number | undefined) {
  if (value) {
    console.log("Truthy value:", value)
  } else {
    console.log("Falsy value:", value)
  }
}

process("Hi")
process(0)          //  falsy!
process(undefined)

// 3. Truthiness with empty string

function checkInput(value: string | null) {
  if (value) {
    console.log("Valid string:", value)
  } else {
    console.log("Missing or empty string")
  }
}

checkInput("")      // treated as falsy
checkInput(null)

// 4. Safer check (explicit null/undefined)

function safeCheck(value: string | null) {
  if (value !== null) {
    // Now only null is excluded, "" is allowed
    console.log("Value:", value)
  }
}

safeCheck("")       // works
safeCheck(null)

// 5. Boolean narrowing

function checkFlag(flag: boolean | undefined) {
  if (flag) {
    console.log("Flag is true")
  } else {
    console.log("Flag is false or undefined")
  }
}

checkFlag(true)
checkFlag(false)
checkFlag(undefined)

// 6. Negation narrowing (!value)

function handle(value: string | null) {
  if (!value) {
    // value is null or empty string
    console.log("Falsy value")
    return
  }

  // value is string
  console.log("Truthy string:", value.toUpperCase())
}

handle("TypeScript")
handle(null)
