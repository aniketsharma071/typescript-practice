
// 1. Basic example

function printValue(value: Date | string) {
  if (value instanceof Date) {
    // value is narrowed to Date
    console.log("Year:", value.getFullYear())
  } else {
    // value is string
    console.log("String:", value.toUpperCase())
  }
}

printValue(new Date())
printValue("hello")

// 2. Custom class example

class Dog {
  bark() {
    console.log("Woof!")
  }
}

class Cat {
  meow() {
    console.log("Meow!")
  }
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark()
  } else {
    animal.meow()
  }
}

speak(new Dog())
speak(new Cat())

// 3. Multiple instanceof checks

function handle(value: Date | Error | string) {
  if (value instanceof Date) {
    console.log("Date:", value.toISOString())
  } else if (value instanceof Error) {
    console.log("Error:", value.message)
  } else {
    console.log("String:", value)
  }
}

handle(new Date())
handle(new Error("Something went wrong"))
handle("test")


// instanceof works only with classes (not interfaces or type aliases)

type User = { name: string }

// This will NOT work:
// if (value instanceof User)  // ERROR

// 4.objects vs classes

class Person {
  constructor(public name: string) {}
}

const p1 = new Person("Homo Sapiens")
const p2 = { name: "Homo Sapiens" }

console.log(p1 instanceof Person) // true
console.log(p2 instanceof Person) // false

// 5. With unknown

function process(value: unknown) {
  if (value instanceof Date) {
    console.log("Valid Date:", value.getTime())
  } else {
    console.log("Not a Date")
  }
}

process(new Date())
process("not a date")


