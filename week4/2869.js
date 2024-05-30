// const input = `100 99 1000000000`.trim().split(" ").map(Number);
// const input = `5 1 6`.trim().split(" ").map(Number);
// const input = `2 1 5`.trim().split(" ").map(Number);

console.time("perf");

// 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
// const [a, b, v] = input;
// let days = 1;
// let height = 0;

// while (true) {
//   height += a;
//   if (height >= v) break;
//   height -= b;
//   days++;
// }

// console.log(days);

// 2차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [a, b, v] = input;
const gap = a - b;
const safe = v - a;
console.log(Math.ceil(safe / gap) + 1);

//
console.timeEnd("perf");
