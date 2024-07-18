// const input = `7 7
// 8
// 10`
//   .trim()
//   .split("\n")
//   .map((line, idx) => (idx === 0 ? line.split(" ").map(Number) : Number(line)));

// console.log("input", input);
console.time("perf");

// 1차
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line, idx) => (idx === 0 ? line.split(" ").map(Number) : Number(line)));

const [[a1, a0], c, n0] = input;

for (let n = n0; n <= 100; n++) {
  const decision = (a1 - c) * n + a0 <= 0;
  if (!decision) {
    console.log(0);
    break;
  }

  if (n === 100) {
    console.log(1);
  }
}

console.timeEnd("perf");
