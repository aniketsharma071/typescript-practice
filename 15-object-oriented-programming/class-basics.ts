class Person {
    name: string;
    age: number;
    
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

let human = new Person("Homo sapiens", 19);

console.log(human)