// const input = `41 64 16`.trim().split(" ").map(Number);

// console.log("input", input);

console.time("perf");

// 1차
// const input = 500000;
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = BigInt(input);
console.log((n * n * n).toString());
console.log(3);

console.timeEnd("perf");
