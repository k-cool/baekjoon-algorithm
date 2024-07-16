// const input = `7 7 7
// 6 5 4
// 3 2 5
// 6 2 6
// 0 0 0`
//   .trim()
//   .split("\n")
//   .map((line) => line.split(" ").map(Number));

// console.log("input", input);

console.time("perf");

// 1차
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
input.forEach((line) => {
  const [a, b, c] = [...line].sort((a, b) => b - a);

  if (a + b + c === 0) return;

  if (a >= b + c) return console.log("Invalid");

  if (a === b && b === c) return console.log("Equilateral");

  if ((a === b && b !== c) || (a === c && b !== c) || (b === c && a !== b)) return console.log("Isosceles");

  if (a !== b && b !== c && a !== c) return console.log("Scalene");
});

console.timeEnd("perf");
