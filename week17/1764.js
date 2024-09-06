// const input = `3 4
// aohhenrie
// charlie
// baesangwook
// obama
// baesangwook
// aohhenrie
// clinton
// `
//   .trim()
//   .split("\n");

// console.log("input", input);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0].split(" ")[0];
const set = new Set(input.slice(1, N + 1));
const arr = input.slice(N + 1);
const result = [];

arr.forEach((word) => set.has(word) && result.push(word));

console.log(result.length + "\n" + result.sort().join("\n"));

console.timeEnd("perf");
