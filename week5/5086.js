// const input = `8 16
// 32 4
// 17 5
// 0 0`
//   .trim()
//   .split("\n")
//   .map((str) => str.split(" ").map(Number));

console.time("perf");

// 1차
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));

const GCD = (a, b) => {
  if (a === 0 || b === 0) return null;
  const lg = Math.max(a, b);
  const sm = Math.min(a, b);

  const r = lg % sm;
  if (r === 0) return sm;

  return GCD(sm, r);
};

input.forEach(([a, b]) => {
  if (a === 0 || b === 0) return;

  const gcd = GCD(a, b);

  if (gcd === a) return console.log("factor");
  if (gcd === b) return console.log("multiple");
  else return console.log("neither");
});

//
console.timeEnd("perf");
