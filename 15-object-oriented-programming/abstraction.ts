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

let circle = new Circle(5);
console.log(circle.area());