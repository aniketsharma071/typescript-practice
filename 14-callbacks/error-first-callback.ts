type ErrorFirstCallback = (err: Error | null, result: string) => void;

let readFile = (filename: string, callback: ErrorFirstCallback):void => {
    const fileContent = `Content of ${filename}`;
    callback(null, fileContent);
};

readFile("example.txt", (err, result) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content:", result);
    }
});
