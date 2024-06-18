const input = `4
1 3 5 7 2 4 61`
  .trim()
  .split("\n")[1]
  .split(" ")
  .map(Number);

// console.log(input);

console.time("perf");

// 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")[1].split(" ").map(Number);
// let cnt = 0;

// input.forEach((num) => {
//   if (num === 1) return;
//   for (let i = 2; i < Math.sqrt(num) + 1; i++) {
//     if (num === 2) break;
//     if (num % i === 0) return;
//   }
//   cnt += 1;
// });

// console.log(cnt);

// 2차
const max = Math.max(...input);
const memo = {};

for (let i = 2; i < max; i++) {}

console.timeEnd("perf");
