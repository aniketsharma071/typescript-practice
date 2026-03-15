let nums:number[]=[1,2,3,4,5,6,7,8,9,10]

const sum:number=nums.reduce((acc:number, num:number) => acc+num,0)

console.log(sum)