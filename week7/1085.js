// const input = `161 181 762 375`.trim().split(" ").map(Number);

// console.log(input);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [x, y, w, h] = input;

const disWidth = Math.min(w - x, x);
const disHeight = Math.min(h - y, y);
console.log(Math.min(disWidth, disHeight));

console.timeEnd("perf");
