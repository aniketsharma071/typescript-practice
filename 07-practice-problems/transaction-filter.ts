const transactions:number[] = [299, 383, -1274, 8472, -83, 847, -367, 73, -3647, -34, -16, 2741]


let income:number[] = transactions.filter((val) => val>0)
let expense:number[] = transactions.filter((val) => val<=0)

let total:number[] = [...income, ...expense]
let netIncome:number = total.reduce((acc,next) => acc+next,0)
console.log(netIncome)

