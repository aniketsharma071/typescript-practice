type Species = {
  species: string
  habitat?: string
  intelligenceLevel: number
}

const unknownSpecies: Species = {
  species: "Unknown Entity",
  intelligenceLevel: 6
}

console.log(unknownSpecies)