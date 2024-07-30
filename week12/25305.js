const input = `5 2
100 76 85 93 98`
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

console.log("input", input);

console.time("perf");

// 1차
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
const [[_, cutRank], points] = input;
console.log(points.sort((a, b) => b - a)[cutRank - 1]);

console.timeEnd("perf");
