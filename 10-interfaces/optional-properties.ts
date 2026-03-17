interface Species {
  species: string,
  habitat?: string,
  intelligenceLevel: number
}

const unknown: Species = {
  species: "Unknown Entity",
  intelligenceLevel: 6
}

console.log(unknown)