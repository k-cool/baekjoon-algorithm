const input = `1 3 -1 4 1 7`.trim().split(" ").map(Number);

// console.log("input", input);

// 1차
// const input = require("fs")
// .readFileSync("/dev/stdin")
// .toString()
// .trim()
// .split(" ")
// .map((str) => parseInt(str));

// const [a, b, c, d, e, f] = input;

const x = (c * e - b * f) / (a * e - b * d);
const y = (c * d - a * f) / (b * d - a * e);

// const denominator = a * e - b * d;
// console.log(denominator);

// const x = (c * e - b * f) / denominator;
// const y = (a * f - c * d) / denominator;

// console.log(x, y);

// 2차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
// const [a, b, c, d, e, f] = input;

// for (let x = -999; x <= 999; x++) {
//   for (let y = -999; y <= 999; y++) {
//     if (a * x + b * y === c && d * x + e * y === f) console.log(x, y);
//   }
// }

//3차 재도전
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [a, b, c, d, e, f] = input;

const x = (c * e - b * f) / (a * e - b * d);
const y = (c * d - a * f) / (b * d - a * e);

console.log(`${x} ${y}`);

// console.timeEnd("perf");
