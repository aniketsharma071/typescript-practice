let numbers = <T>(arr: T[]): T[] => {
  return arr;
}

let result = numbers<number>([1, 2, 3, 4, 5]);
console.log(result);