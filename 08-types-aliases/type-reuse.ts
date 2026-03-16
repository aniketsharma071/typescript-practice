type Species = {
  species: string
  habitat: string
  intelligenceLevel: number
}

const speciesList:Species[] = [
  {
    species: "Homo Sapiens",
    habitat: "Earth",
    intelligenceLevel: 9
  },
  {
    species: "Martian",
    habitat: "Mars",
    intelligenceLevel: 7
  }
]

function printSpecies(entity: Species): void {
  console.log(`Species: ${entity.species}`)
  console.log(`Habitat: ${entity.habitat}`)
  console.log(`Intelligence Level: ${entity.intelligenceLevel}`)
}

speciesList.forEach((entity) => {
  printSpecies(entity)
})