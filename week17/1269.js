// const input = `3 5
// 1 2 4
// 2 3 4 5 6
// `
//   .trim()
//   .split("\n")
//   .slice(1)
//   .map((line) => line.split(" ").map(Number));

// console.log("input", input);

console.time("perf");

// 1차
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(" ").map(Number));

const [A, B] = input;
const setA = new Set(A);
const intersectionCnt = B.reduce((a, c) => (setA.has(c) ? ++a : a), 0);

console.log(A.length + B.length - 2 * intersectionCnt);

console.timeEnd("perf");
