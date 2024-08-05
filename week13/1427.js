// const input = `5
// 3 4
// 1 -1
// 1 1
// 1 -1
// 2 2
// 3 3
// 3 4
// 1 1
// 2 2
// 3 3
// `
//   .trim()
//   .split("\n")
//   .slice(1)
//   .map((line) => line.split(" ").map(Number));

console.log("input", input);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(
  input
    .split("")
    .sort((a, b) => b - a)
    .join("")
);

console.timeEnd("perf");
