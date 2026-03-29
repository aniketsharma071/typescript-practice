class Storage<T> {
    private data: T[] = []

    add(item: T) {
        this.data.push(item)
    }
    show() {     
           console.log(this.data);
    }
}

let storage = new Storage<string>();
storage.add("Hello, world!");
let numberStorage = new Storage<number>();
numberStorage.add(42);
storage.show();
numberStorage.show();