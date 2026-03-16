type Spceis = {
    species: string,
}

type Habitat = {
    habitat: string,
}

type SpecieHabitat = Spceis & Habitat

let Humans:SpecieHabitat = {
    species: "Homo Sapiens",
    habitat: "Earth" 
}
console.log(Humans)