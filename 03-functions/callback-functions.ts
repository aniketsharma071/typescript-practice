let greet =(name:string, callback:(message:string)=>void):void=>{
    const message =`Hello ${name}`
    callback(message)
}

let printMessage=(message:string):void=>{
    console.log(message)
}

greet("Homo Sapiens",printMessage)
