let point: readonly [number, number] = [10, 20]

// point[0] = 5 // This line will give error
point = [5,2] // This will get executed and point value will change to 5,2
console.log(point)
