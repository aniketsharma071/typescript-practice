class Species {
    constructor(public name: string) { 
        this.name = name;
    }
}

class Animal extends Species {
    constructor(name: string, public species: string) {
        super(name);
        this.species = species;
    }
}

let dog = new Animal("Dog", "Canine");
console.log(dog.name);
console.log(dog.species);

let Martain = new Species("Martian");
console.log(Martain.name);

