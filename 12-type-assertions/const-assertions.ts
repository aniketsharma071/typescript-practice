// 1. Basic example

let x = "Homo Sapiens"
let y = "Homo Sapiens" as const


// 2. Object example

const user = {
  name: "Homo Sapiens",
  age: 19,
} as const

// Properties become:
// - readonly
// - literal types

// user.name = "Martain" Error (readonly)

// 3. Array example (tuple behavior)

const numbers = [1, 2, 3] as const

// Type becomes:
// readonly [1, 2, 3]

// numbers.push(4) Error

// 4. Without vs with `as const`

const obj1 = {
  role: "admin",
}

const obj2 = {
  role: "admin",
} as const

console.log(obj1.role); 
console.log(obj2.role); 

// 5. Useful with discriminated unions

const circle = {
  kind: "circle",
  radius: 5,
} as const


// 6. Preventing unintended changes

const config = {
  api: "/users",
  method: "GET",
} as const

let mode = config.method 
console.log(mode)

// config.method = "POST" Error

// 7. Readonly behavior

const data = {
  id: 1,
  tags: ["a", "b"],
} as const

// data.id = 2 Error
// data.tags.push("c") Error
