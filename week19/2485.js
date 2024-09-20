const input = `4
1
3
40
`
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

// console.log("input", input);

console.time("perf");

// // 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1).map(Number);

// const diffs = [];

// for (let i = 0; i < input.length - 1; i++) {
//   diffs.push(input[i + 1] - input[i]);
// }

// let gcd = diffs[0];

// for (let i = 1; i < diffs.length; i++) {
//   gcd = GCD(gcd, diffs[i]);
// }

// console.log((input[input.length - 1] - input[0]) / gcd + 1 - input.length);

// function GCD(a, b) {
//   let large = Math.max(a, b);
//   let small = Math.min(a, b);
//   let remain = large % small;

//   while (true) {
//     if (remain === 0) break;

//     large = small;
//     small = remain;
//     remain = large % small;
//   }

//   return small;
// }

// 2차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1).map(Number);
const diffs = new Set();

for (let i = 0; i < input.length - 1; i++) {
  diffs.add(input[i + 1] - input[i]);
}

const gcd = Array.from(diffs).reduce((acc, cur) => GCD(acc, cur));

console.log((input[input.length - 1] - input[0]) / gcd + 1 - input.length);

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
