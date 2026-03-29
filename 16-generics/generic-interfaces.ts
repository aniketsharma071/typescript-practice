interface Pair<T, U> {
  first: T;
  second: U;
}

let pair: Pair<string, number> = {
  first: "Hello",
  second: 42
};
console.log(pair);