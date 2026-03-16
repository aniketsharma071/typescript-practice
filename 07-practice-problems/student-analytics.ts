const students = [
    {
        name: "Homo Sapiens",
        maths: 92,
        science: 89,
        psychology: 93,
        philosophy: 96,
    },
    {
        name: "Wookiee",
        maths: 45,
        science: 53,
        psychology: 63,
        philosophy: 46,
    },
    {
        name: "Martain",
        maths: 69,
        science: 71,
        psychology: 53,
        philosophy: 59,
    }
]

let result:number[] = students
    .map((val) => (val.maths + val.philosophy + val.psychology + val.science)/4)
    .filter((val) => val > 60  )

console.log(result)