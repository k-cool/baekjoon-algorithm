// const input = `5 11
// baekjoononlinejudge
// startlink
// codeplus
// sundaycoding
// codingsh
// baekjoon
// codeplus
// codeminus
// startlink
// starlink
// sundaycoding
// codingsh
// codinghs
// sondaycoding
// startrink
// icerink
// `
//   .trim()
//   .split("\n")
//   .map((line, idx) => (idx === 0 ? line.split(" ").map(Number) : line));

// console.log("input", input);

console.time("perf");

// 1차
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line, idx) => (idx === 0 ? line.split(" ").map(Number) : line));

const [[N, M], ...strs] = input;
const S = strs.slice(0, N);
const target = strs.slice(N);
const map = new Map();

S.forEach((word) => map.set(word, true));
console.log(target.reduce((a, c) => (map.get(c) ? ++a : a), 0));

// 2차
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((line, idx) => (idx === 0 ? line.split(" ").map(Number) : line));

// const [[N, M], ...strs] = input;
// const S = strs.slice(0, N);
// const target = strs.slice(N);
// const set = new Set();

// S.forEach((word) => set.add(word));
// console.log(target.reduce((a, c) => (set.has(c) ? ++a : a), 0));

console.timeEnd("perf");
