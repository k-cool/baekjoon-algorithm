// const input = `4
// -12 -1
// 0 0
// -5 -2
// -3 -4`
//   .trim()
//   .split("\n");

// console.log("input", input);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let minX, minY, maxX, maxY;

input.splice(1).forEach((str, idx) => {
  const [x, y] = str.split(" ").map(Number);

  if (idx === 0) {
    minX = maxX = x;
    minY = maxY = y;
    return;
  }

  if (x > maxX) maxX = x;
  if (x < minX) minX = x;
  if (y > maxY) maxY = y;
  if (y < minY) minY = y;
});

console.log(Math.abs(maxX - minX) * Math.abs(maxY - minY));

console.timeEnd("perf");
