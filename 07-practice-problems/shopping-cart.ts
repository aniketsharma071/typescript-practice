const items = [
    {
        product: "Electronics",
        price: 999
    },
    {
       product: "Wearable",
       price: 599
    },
    {
        product: "Electronics",
        price: 6799
    }
]

let products:number = items.map((val)=>{
    if(val.product === "Electronics"){
        return val.price = val.price - (val.price*20/100) 
    }
    return val.price
}).reduce((acc,val) => acc+val ,0)
console.log(products)