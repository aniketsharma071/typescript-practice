let greet: (name: string) => string

greet = function (name: string): string {
  return `Hello ${name}`
}

console.log(greet("Homo Sapiens"))