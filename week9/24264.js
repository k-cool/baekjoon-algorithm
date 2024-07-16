// const input = `41 64 16`.trim().split(" ").map(Number);

// console.log("input", input);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(input * input);
console.log(2);

console.timeEnd("perf");
