// const input = `5
// 5
// 4
// 3
// 2
// 1`
//   .trim()
//   .split("\n")
//   .map(Number);

console.log("input", input);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
console.log(
  input
    .slice(1)
    .sort((a, b) => a - b)
    .join("\n")
);

console.timeEnd("perf");
