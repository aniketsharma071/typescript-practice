interface Specie {
    species: string,
    habitat: string,
    intelligenceLevel: number,
    isExtinct: boolean
}

const human: Specie = {
    species: "Homo Sapiens",
    habitat: "Earth",
    intelligenceLevel: 9,
    isExtinct: false
}
console.log(human)