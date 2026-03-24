let CallbackHell = ():void => {
    setTimeout(() => {
        console.log("First callback executed");
        setTimeout(() => {
            console.log("Second callback executed");
            setTimeout(() => {
                console.log("Third callback executed");
            }, 1000);
        }, 1000);
    }, 1000);
};

CallbackHell();
