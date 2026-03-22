//Basic types

let age:number
let userName:string
let isInstructor:boolean

//Arrays

let hobbies:string[]
hobbies = ["Sports", "Cooking"]

//Tuples

let role:[number, string]
role = [2, "author"]

//functions 

function add(a:number, b:number):number {
    return a + b
}

//if statements

if (hobbies[0] === "Sports") {
    console.log("Hobby is sports")
}

//if-else statements

if (hobbies[0] === "Sports") {
    console.log("Hobby is sports")
} else {
    console.log("Hobby is not sports")
}

//if-else if statements

if (hobbies[0] === "Sports") {
    console.log("Hobby is sports")
} else if (hobbies[0] === "Cooking") {
    console.log("Hobby is cooking")
} else {
    console.log("Hobby is something else")
}

//Switch statements

switch (hobbies[0]) {
    case "Sports":
        console.log("Hobby is sports")
        break
    case "Cooking":
        console.log("Hobby is cooking")
        break
    default:
        console.log("Hobby is something else")
}

//loops

for (let hobby of hobbies) {
    console.log(hobby)
}

//map

hobbies.map(hobby => {
    console.log(hobby.toUpperCase())
})

//filter

const filteredHobbies = hobbies.filter(hobby => hobby === "Sports")
console.log(filteredHobbies)

//reduce

const totalLength = hobbies.reduce((acc, hobby) => acc + hobby.length, 0)
console.log(totalLength)

//types

type Person = {
    name: string
    age: number
}

//Union
let course:string | number = "React - The Complete Guide"
course = 12341

//Intersection
type A = {
    name:string
}
type B = {
    age:number
}
type C = A & B 

//interfaces

interface User {
    name: string
    age: number
}

//type narrowing & type guards

function printUserInfo(user: User | string) {
    if (typeof user === "string") {
        console.log("User name: " + user)
    } else {
        console.log("User name: " + user.name)
        console.log("User age: " + user.age)
    }
}

function isUser(obj: any): obj is User {
    return "name" in obj && "age" in obj
}

//type assertions
let someValue: any = "This is a string"
let strLength: number = (someValue as string).length    