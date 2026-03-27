class Person {
    // name:string
    // age:number
    constructor(public name: string, private age: number) {
        this.age=age
        this.name=name
    }
    
}

let human = new Person("Human", 19);
console.log(human.name); 
