let pair = <T, U>(first: T, second: U): [T, U] => {
  return [first, second];
}

let result = pair<string, number>("Hello", 42);
console.log(result);