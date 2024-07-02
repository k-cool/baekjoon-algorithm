// const input = `3`.trim();

// console.log(input);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

console.log(input * 4);

console.timeEnd("perf");
