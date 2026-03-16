type BiologicalSpecies = {
  category: "biological"
  species: string
  habitat: string
  intelligenceLevel: number
}

type ArtificialSpecies = {
  category: "artificial"
  model: string
  originPlanet: string
  processingPower: number
}

type Entity = BiologicalSpecies | ArtificialSpecies

const entities: Entity[] = [
  {
    category: "biological",
    species: "Homo Sapiens",
    habitat: "Earth",
    intelligenceLevel: 9
  },
  {
    category: "artificial",
    model: "XR-200",
    originPlanet: "Mars Station",
    processingPower: 120
  }
]

entities.forEach((entity) => {
  if (entity.category === "biological") {
    console.log(`Species: ${entity.species}`)
    console.log(`Habitat: ${entity.habitat}`)
  } else {
    console.log(`Model: ${entity.model}`)
    console.log(`Processing Power: ${entity.processingPower}`)
  }
})