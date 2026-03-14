function combine(a: number, b: number): number
function combine(a: string, b: string): string
function combine(a: number | string, b: number | string) {
    if(typeof a === "string" && typeof b === "string"){
        return `${a}${b}`
    }
    if(typeof a === "number" && typeof b === "number"){
        return a+b

    }  

    throw new Error("This should never happen based on overloads");
}

console.log(combine(2, 3))
console.log(combine("Hello ","World"))
// console.log(combine(2, "World"));  // TypeScript Error: No overload matches this call.