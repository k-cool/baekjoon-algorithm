const input = `2 7
3 5`
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

console.log("input", input);

console.time("perf");

// 1차
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((line) => line.split(" ").map(Number));
const [[x1, y1], [x2, y2]] = input;
const up = x1 * y2 + x2 * y1;
const down = y1 * y2;
const gcd = GCD(up, down);

console.log(`${up / gcd} ${down / gcd}`);

function GCD(a, b) {
  let large = Math.max(a, b);
  let small = Math.min(a, b);
  let remain = large % small;

  while (true) {
    if (remain === 0) break;

    large = small;
    small = remain;
    remain = large % small;
  }

  return small;
}

console.timeEnd("perf");
