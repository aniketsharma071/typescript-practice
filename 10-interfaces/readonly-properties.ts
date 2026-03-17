interface Species {
    readonly species: string,
    habitat: string,
    intelligenceLevel: number
}

const human: Species = {
    species: "Homo Sapiens",
    habitat: "Earth",
    intelligenceLevel: 9
}

console.log(human)