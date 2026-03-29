function printLength<T extends { length: number }>(item: T) {
    console.log(item.length)
}

printLength("Hello, world!");
printLength([1, 2, 3, 4, 5]);
