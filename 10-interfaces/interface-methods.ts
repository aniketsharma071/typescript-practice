interface Species {
    species: string,
    habitat: string
    intelligenceLevel: number,
    describe(): string
}

const human: Species = {
    species: "Homo Sapiens",
    habitat: "Earth",
    intelligenceLevel: 9,
    describe() {
        return `This is a ${this.species} from ${this.habitat} with an intelligence level of ${this.intelligenceLevel}.`
    },
}

console.log(human)
console.log(human.describe())