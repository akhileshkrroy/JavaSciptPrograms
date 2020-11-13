// var names = ["Mike","Matt","Nancy","Matt","Matt","Adam","Jenny","Nancy","Carl"];

// let chars = ['A', 'B', 'A', 'C', 'B'];
let nums = [1, 2, 1, 3, 2];
const set = new Set(nums);
const values = set.values();
const nonduparray = Array.from(values);
console.log(nonduparray);
