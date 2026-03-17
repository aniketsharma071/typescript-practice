interface Species {
    species: string,
    habitat: string,
    intelligenceLevel: number
}

function describeSpecies(species: Species): string {
    return `The ${species.species} is a species that lives in ${species.habitat} and has an intelligence level of ${species.intelligenceLevel}.`
}

const human: Species = {
    species: "Homo Sapiens",
    habitat: "Earth",
    intelligenceLevel: 9
}

console.log(describeSpecies(human))