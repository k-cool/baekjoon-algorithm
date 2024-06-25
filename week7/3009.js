// const input = `30 20
// 10 10
// 10 20`
//   .trim()
//   .split("\n")
//   .map((p) => p.split(" ").map(Number));

console.log(input);

console.time("perf");

// 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((p) => p.split(" ").map(Number));
const [[x1, y1], [x2, y2], [x3, y3]] = input;

let xSum = 0;
let ySum = 0;

xSum = x1 === x2 ? 2 * (x1 + x3) : 2 * (x1 + x2);
ySum = y1 === y2 ? 2 * (y1 + y3) : 2 * (y1 + y2);

input.forEach(([x, y]) => {
  xSum -= x;
  ySum -= y;
});

console.log(xSum, ySum);

console.timeEnd("perf");
