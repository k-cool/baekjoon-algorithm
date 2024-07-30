// const input = `10
// 40
// 30
// 60
// 30`
//   .trim()
//   .split("\n")
//   .map(Number);

// console.log("input", input);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
console.log(input.reduce((a, c) => a + c, 0) / 5);
console.log(input.sort((a, b) => a - b)[2]);

console.timeEnd("perf");
