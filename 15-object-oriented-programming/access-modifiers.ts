class User{
    public name: string;
    private email: string;
    protected age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;
    }
}

let user = new User("Homo Sapiens", "homosapiens@example.com", 19);
console.log(user.name); // Accessible
console.log(user.getDetails()); // Accessible
// console.log(user.email); // Error: Property 'email' is private
// console.log(user.age); // Error: Property 'age' is protected