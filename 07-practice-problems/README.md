# Practice Problems in TypeScript

This folder contains practical applications of TypeScript concepts including basic types, arrays, functions, and array methods. 
These programs focus on solving real-world logic problems by combining multiple programming techniques to process and transform data.

---

## Student Analytics

This program manages student scores and identifies high-performing students.

**It demonstrates:**
* Mapping objects to numerical values
* Filtering data based on thresholds
* Chaining methods to clean up results

**Example Logic:**
```typescript
const students = [
    { 
        name: "Homo Sapiens", 
        maths: 92, 
        science: 89, 
        psychology: 93, 
        philosophy: 96 
    }
]

let results = students
    .map(s => s.maths + s.science + s.psychology + s.philosophy)
    .filter(total => total > 250)
```
---
## Shopping Cart

This program simulates an e-commerce checkout process with category-based discounts.    

**It demonstrates:**

* Processing arrays of objects
* Applying conditional logic (20% discount for Electronics)
* Using .reduce() to calculate a final grand total

**Example Logic:**
```typescript
const items = [
    { 
        product: "Electronics", 
        price: 999 
    },
    { 
        product: "Wearable", 
        price: 599
    }
]

let products:number = items.map((val)=>{
    if(val.product === "Electronics"){
        return val.price = val.price - (val.price*20/100) 
    }
    return val.price
}).reduce((acc,val) => acc+val ,0)
```

---

## Inventory Low-Stock Alerter
This program analyzes stock levels using parallel arrays for names and quantities.

**It demonstrates:**

* Handling parallel arrays via loop indices
* Multi-stage conditional checks (In Stock, Low Stock, Out of Stock)
* Template literals for status reporting

**Example Logic:**
```typescript
const stockName: string[] = ["A", "B"]
const stockQuantity: number[] = [6, 0]

stockName.forEach((name, i) => {
    if (stockQuantity[i] === 0) return `${name} is out of stock`
})
```

---

## Transaction Categorizer

This program separates financial data into income and expenses to calculate a net balance.

**It demonstrates:**

* Filtering positive and negative numbers
* Merging arrays using the `Spread Operator (...)`
* Aggregating totals from combined data sources

**Example Logic:**


```typescript
const transactions: number[] = [299, -1274, 8472, -83]

let income = transactions.filter(val => val >= 0)
let expense = transactions.filter(val => val < 0)

let netBalance = [...income, ...expense].reduce((acc, val) => acc + val, 0)
```

---

## Key takeaways from these exercises:

* **Method Chaining** → Linking `.filter()` and `.map()` allows for clean, readable data pipelines.
* **Immutability** → Using methods like `map` and `filter` ensures the original data remains unchanged.
* **Data Aggregation** → The `.reduce()` method is a powerful tool for turning an entire array into a single, useful value (like a total or a summary object).
* **Logical Structuring** → Organizing logic into reusable functions with explicit type annotations makes the code safer and easier to debug.