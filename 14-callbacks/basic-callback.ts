let greet = (name:string, callback: (msg:string) => void) => {
    const message = `Hello, ${name}!`;
    callback(message);
}

greet("Homo Sapiens", (msg) => {
    console.log(msg);
});