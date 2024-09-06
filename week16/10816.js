const input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10
`
  .trim()
  .split("\n");

console.log("input", input);

console.time("perf");

// 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [, nNums, , mNums] = input;
const map = new Map();

nNums.split(" ").forEach((numStr) => (map.get(numStr) ? map.set(numStr, map.get(numStr) + 1) : map.set(numStr, 1)));

console.log(
  mNums
    .split(" ")
    .map((numStr) => map.get(numStr) ?? 0)
    .join(" ")
);

console.timeEnd("perf");
