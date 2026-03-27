class Person {
    private static species: string = "Homo sapiens";
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public static getSpecies(): string {
        return Person.species;
    }
}

let human = new Person("Human", 19);

console.log(Person.getSpecies());