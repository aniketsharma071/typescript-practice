type Species = {
    readonly species: string,
    habitat: string,
    intelligenceLevel: number
}

let humans:Species = {
    species: "Homo Sapiens",
    habitat: "Earth",
    intelligenceLevel: 9
}

// humans.species = "Hominidae" // Not allowed

console.log(humans)