// const input = `41 64 16`.trim().split(" ").map(Number);

// console.log("input", input);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [a, b, c] = input.sort((a, b) => b - a);

if (a >= b + c) console.log(2 * (b + c) - 1);
else console.log(a + b + c);

console.timeEnd("perf");
