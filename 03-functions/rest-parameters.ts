function sum(...numbers:number[]):number{
    let sum = 0
    for(let num of numbers){
        sum +=num
    }
    return sum
}

let total = sum(1,2,3,4,5,6,7,8,9,10)
console.log(total)