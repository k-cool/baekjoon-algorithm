// const input = `41 64 16`.trim().split(" ").map(Number);

// console.log("input", input);

console.time("perf");

// 1차
// const n = 500000;
const n = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(((BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6)).toString());
console.log(3);

console.timeEnd("perf");
