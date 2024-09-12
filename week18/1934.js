const input = `3
1 45000
6 10
13 17
`
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(" ").map(Number));

console.log("input", input);

console.time("perf");

// 1차
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .slice(1)
//   .map((line) => line.split(" ").map(Number));
const result = [];

input.map(([a, b]) => {
  console.log("wow");
  let large = Math.max(a, b);
  let small = Math.min(a, b);
  let remain = large % small;

  while (true) {
    console.log("c");
    if (remain === 0) break;

    large = small;
    small = remain;
    remain = large % small;
  }

  result.push((a * b) / small);
});

console.log(result.join("\n"));

console.timeEnd("perf");
