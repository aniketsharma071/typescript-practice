function greet(name:string):void{
    console.log(`Hello ${name}`)
}

function throwError(message:string):never{
    throw new Error(message)
    
}

greet("Homo Sapien")
