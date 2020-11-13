var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];

let chars = ['A', 'B', 'A', 'C', 'B'];
//spread(...) operator
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);