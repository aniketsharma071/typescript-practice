interface Species {
    species: string,
    habitat: string
}

interface advanceSpecies extends Species {
    intelligenceLevel: number
}

const human: advanceSpecies = {
    species: "Homo Sapiens",
    habitat: "Earth",
    intelligenceLevel: 9
}

console.log(human)