const input = `4
Baha enter
Askar enter
Baha leave
Artem enter
`
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(" ").map((str) => str.trim()));

console.log("input", input);

console.time("perf");

// 1차
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .slice(1)
//   .map((line) => line.split(" "));
// const set = new Set();
// input.forEach((log) => (log[1] === "enter" ? set.add(log[0]) : set.delete(log[0])));
// console.log([...set].sort((a, b) => (a > b ? -1 : 1)).join("\n"));

// 2차
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .slice(1)
//   .map((line) => line.split(" "));
const map = new Map();
input.forEach((log) => (map.get(log[0]) ? map.delete(log[0]) : map.set(log[0], 1)));
console.log([...map.keys()].sort((a, b) => (a > b ? -1 : 1)).join("\n"));

console.timeEnd("perf");
