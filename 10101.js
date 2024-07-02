// const input = `0.2
// 0.2
// 0.4`
//   .trim()
//   .split("\n")
//   .map(Number);

// console.log("input", input);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const set = new Set(input);

if (input.reduce((a, c) => a + c, 0) !== 180) console.log("Error");
else
  switch (set.size) {
    case 1:
      console.log("Equilateral");
      break;
    case 2:
      console.log("Isosceles");
      break;
    case 3:
      console.log("Scalene");
  }

console.timeEnd("perf");
