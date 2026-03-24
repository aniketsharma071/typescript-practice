type Callback = (msg: string) => void;

let greet = (name: string, callback: Callback): void => {
    const message = `Hello, ${name}!`;
    callback(message);
};

greet("Homo Sapiens", (msg) => {
    console.log(msg);
});

