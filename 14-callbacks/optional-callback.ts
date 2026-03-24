let greet = (name: string, callback?: (msg: string) => void) => {
    const message = `Hello, ${name}!`;
    if (callback) {
        callback(message);
    }
    else {
        console.log(`Welcome, ${name}!`);
    }

};

greet("Homo Sapiens");
greet("Homo Sapiens", (msg) => {
    console.log(msg);
});