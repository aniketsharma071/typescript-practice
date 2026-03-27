class Animal {
    constructor(public name: string) {}

    makeSound(): void {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Bark! Bark!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!");
    }
}

const pets: Animal[] = [new Dog("Buddy"), new Cat("Whiskers")];

pets.forEach(pet => {
    pet.makeSound(); 
});