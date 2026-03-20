
// 1. Basic example

type Dog = { bark: () => void }
type Cat = { meow: () => void }

function speak(animal: Dog | Cat) {
  if ("bark" in animal) {
    // animal is narrowed to Dog
    animal.bark()
  } else {
    // animal is narrowed to Cat
    animal.meow()
  }
}
let myDog: Dog = { bark: () => console.log("Woof!") }
let myCat: Cat = { meow: () => console.log("Meow!") }
speak(myDog)
speak(myCat) 

// 2. Multiple object types

type Car = { drive: () => void }
type Boat = { sail: () => void }

function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive()
  } else {
    vehicle.sail()
  }
}
let myCar: Car = { drive: () => console.log("Driving...") }
let myBoat: Boat = { sail: () => console.log("Sailing...") }
move(myCar)
move(myBoat)

// 3. Shared properties 

type User = { name: string }
type Admin = { name: string; role: string }

function printUser(user: User | Admin) {
  console.log(user.name) // common property

  if ("role" in user) {
    // narrowed to Admin
    console.log("Role:", user.role)
  }
}

let normalUser: User = { name: "Alice" }
let adminUser: Admin = { name: "Bob", role: "superadmin" }
printUser(normalUser)
printUser(adminUser)

// 4. Optional properties

type A = { x?: number }
type B = { y: string }

function check(obj: A | B) {
  if ("x" in obj) {
    // obj might still have x as undefined
    console.log("x exists:", obj.x)
  }
}

let obj1: A = { x: 10 }
let obj2: A = {}
let obj3: B = { y: "hello" }
check(obj1)
check(obj2) // x exists: undefined (because x is optional and not present)
check(obj3) // x exists: undefined (because B doesn't have x, but it's still in the union)

// 5. With unknown (safe checking)

function handle(value: unknown) {
  if (typeof value === "object" && value !== null && "name" in value) {
    // value is now object with 'name' property
    console.log("Has name property")
  }
}

handle({ name: "Homo Sapiens" })
handle(null)
handle("test")


// `in` checks property existence, NOT its type

type Example = { value: string | number }

function test(obj: Example) {
  if ("value" in obj) {
    // Type is still string | number (not narrowed further)
    console.log(obj.value)
  }
}

let obj: Example = { value: "hello" }
test(obj)

