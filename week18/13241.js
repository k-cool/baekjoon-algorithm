// const input = `121 199`.trim().split(" ").map(Number).map(BigInt);

console.log("input", input);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number).map(BigInt);
const [A, B] = input;

let large = A > B ? A : B;
let small = A > B ? B : A;
let remain = large % small;

while (true) {
  if (remain === 0n) break;

  large = small;
  small = remain;
  remain = large % small;
}

console.log(((A * B) / small).toString());

console.timeEnd("perf");
