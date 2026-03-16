type Habitat = {
    planet: string,
    coordinate: [number, number]
}

type Species = {
    species: string,
    habitat: Habitat,
    intelligenceLevel: number
}

let humans:Species = {
    species: "Homo Sapiens",
    habitat: {
        planet: "Earth",
        coordinate: [20.5937, 78.9629]
    },
    intelligenceLevel: 9
}

console.log(humans)