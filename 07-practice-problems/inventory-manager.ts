const stockName:string[] = ["A", "B", "C", "D", "E", "F"]
const stockQuantity:number[] = [6,7,3,9,0,-1]

let stocks=(name:string, quantity:number):string => {
    if(quantity > 5){
        return `${name} is In Stock`
    }
    else if(quantity <= 5 && quantity > 0){
        return `${name} have low Stocks`
    }
    else if(quantity === 0){
        return `${name} is not In stock`
    }
    else{
        return `Invalid Value`
    }
}

for (let i:number = 0; i < stockName.length && i < stockQuantity.length; i++) {
    console.log(stocks(stockName[i], stockQuantity[i]))
}
