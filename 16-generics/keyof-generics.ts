let getKey = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

let person = {
  name: "Homo Sapiens",
  age: 19,
  city: "Earth"
};
let name = getKey(person, "name");
let age = getKey(person, "age");
let city = getKey(person, "city");
console.log(name);
console.log(age);
console.log(city);