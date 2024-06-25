const [A, B] = `100
1`
  .trim()
  .split("\n")
  .map(Number);

// console.log(input);

console.time("perf");

// 1차
// const [A, B] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
console.log(A * B);

console.timeEnd("perf");
