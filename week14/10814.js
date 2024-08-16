// const input = `3
// 21 Junkyu
// 21 Dohyun
// 20 Sunyoung
// `
//   .trim()
//   .split("\n")
//   .slice(1)
//   .map((line) => line.split(" ").map((item, idx) => (idx === 0 ? Number(item) : item)));

// console.log("input", input);

console.time("perf");

// 1차
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(" ").map((item, idx) => (idx === 0 ? Number(item) : item)));

console.log(
  input
    .sort((a, b) => {
      if (a[0] === b[0]) return 0;
      return a[0] - b[0];
    })
    .flatMap((item) => item.join(" "))
    .join("\n")
);

console.timeEnd("perf");
