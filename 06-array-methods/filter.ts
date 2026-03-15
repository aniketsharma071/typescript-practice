const users =[
    {
        species: "Homo Sapiens",
        habitat: "Earth",
        intelligenceLevel: 9
    },
    {
        species: "Species-A12B",
        habitat: "Planet-B06S",
        intelligenceLevel: 4
    },
    {
        species: "Wookiee",
        habitat: "Kashyyyk",
        intelligenceLevel: 8
    },
    {
        species: "Martian",
        habitat: "Mars",
        intelligenceLevel: 7
    }
];

const details = users.filter((user) => user.intelligenceLevel>=5)
console.log(details)