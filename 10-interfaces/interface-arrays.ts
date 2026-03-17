interface Species {
    species: string,
    habitat: string,
    intelligenceLevel: number
}

const speciesList:Species[] = [
    {
        species: "Homo Sapiens",
        habitat: "Earth",
        intelligenceLevel: 9
    },
    {
        species: "Wookiee",
        habitat: "Kashyyyk",
        intelligenceLevel: 8
    }
]

console.log(speciesList)