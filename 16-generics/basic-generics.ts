let identity = <T>(arg: T): T => {
  return arg;
}

let output = identity<string>("Homo Sapiens");
let output2 = identity<number>(100);
console.log(output);
console.log(output2);