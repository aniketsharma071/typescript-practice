# Object-Oriented Programming in TypeScript

This folder contains examples that demonstrate core object-oriented programming (OOP) concepts in TypeScript.

These examples cover class design, access control, inheritance, abstraction, and reusable object-oriented patterns.

---

## Class Basics

Classes let you define object blueprints with properties and constructors.

Example:
```typescript
class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

let human = new Person("Homo sapiens", 19)
console.log(human)
```

---

## Advanced Constructor Syntax

TypeScript supports parameter properties to declare and initialize fields directly in the constructor.

Example:
```typescript
class Person {
	constructor(public name: string, private age: number) {
		this.name = name
		this.age = age
	}
}

let human = new Person("Human", 19)
console.log(human.name)
```

---

## Access Modifiers

Use `public`, `private`, and `protected` to control where class properties are accessible.

Example:
```typescript
class User {
	public name: string;
	private email: string;
	protected age: number;

	constructor(name: string, email: string, age: number) {
		this.name = name;
		this.email = email;
		this.age = age;
	}

	getDetails() {
		return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`
	}
}

let user = new User("Homo Sapiens", "homosapiens@example.com", 19)
console.log(user.name)
console.log(user.getDetails())
```

---

## Encapsulation

Encapsulation hides internal state and exposes controlled methods for updates and reads.

Example:
```typescript
class BankAccount {
	private balance = 0

	deposit(amount: number) {
		this.balance += amount
	}

	getBalance() {
		return this.balance
	}
}

let account = new BankAccount()
account.deposit(100)
console.log(account.getBalance())
```

---

## Inheritance

Inheritance allows one class to reuse and extend another class using `extends` and `super`.

Example:
```typescript
class Species {
	constructor(public name: string) {
		this.name = name
	}
}

class Animal extends Species {
	constructor(name: string, public species: string) {
		super(name)
		this.species = species
	}
}

let dog = new Animal("Dog", "Canine")
console.log(dog.name)
console.log(dog.species)
```

---

## Polymorphism

Polymorphism lets derived classes override shared methods with their own implementations.

Example:
```typescript
class Animal {
	constructor(public name: string) {}

	makeSound(): void {
		console.log("Some generic animal sound")
	}
}

class Dog extends Animal {
	makeSound(): void {
		console.log("Bark! Bark!")
	}
}

class Cat extends Animal {
	makeSound(): void {
		console.log("Meow!")
	}
}

const pets: Animal[] = [new Dog("Buddy"), new Cat("Whiskers")]
pets.forEach(pet => pet.makeSound())
```

---

## Abstraction

Abstract classes define required behavior that subclasses must implement.

Example:
```typescript
abstract class Shape {
	abstract area(): number
}

class Circle extends Shape {
	constructor(private radius: number) {
		super()
	}

	area() {
		return Math.PI * this.radius ** 2
	}
}

let circle = new Circle(5)
console.log(circle.area())
```

---

## Getters and Setters

Getters and setters provide controlled property access while keeping fields private.

Example:
```typescript
class Person {
	private _name: string;
	private _age: number;

	constructor(name: string, age: number) {
		this._name = name;
		this._age = age;
	}

	get name(): string {
		return this._name
	}

	set name(name: string) {
		this._name = name
	}

	get age(): number {
		return this._age
	}

	set age(age: number) {
		this._age = age
	}
}

let human = new Person("Homo sapiens", 19)
console.log(human.name)
console.log(human.age)
```

---

## Static Members

Static members belong to the class itself rather than individual instances.

Example:
```typescript
class Person {
	private static species: string = "Homo sapiens"
	private name: string;
	private age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	public static getSpecies(): string {
		return Person.species
	}
}

let human = new Person("Human", 19)
console.log(Person.getSpecies())
```

---

## Summary

Object-oriented programming in TypeScript helps organize code into reusable, maintainable, and scalable structures.

Key takeaways:

* Classes define reusable blueprints for objects.
* Constructors initialize object state at creation time.
* Access modifiers enforce visibility and data protection.
* Encapsulation protects internal state through methods.
* Inheritance enables class reuse and extension.
* Polymorphism allows shared interfaces with specialized behavior.
* Abstraction defines contracts through abstract classes.
* Getters and setters provide controlled data access.
* Static members represent class-level behavior and data.
