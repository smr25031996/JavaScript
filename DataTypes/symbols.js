// Two symbols with the same description
const value1 = Symbol('hello');
const value2 = Symbol('hello');
console.log(value1 === value2); // false

// Creating a symbol
const x = Symbol();
console.log(typeof x); // symbol

// Creating a symbol with a description
const y = Symbol('hey');
console.log(y); // Symbol(hey)

// Accessing the description of a symbol
console.log(y.description); // hey

// Adding a symbol as an object key
let id = Symbol("id");
let person = {
  name: 'Jack',
  [id]: 123,
};
console.log(person); // {name: "Jack", Symbol(id): 123}
