// const input = `5
// 6 3 2 10 -10
// 8
// 10 9 -5 2 3 4 5 -10
// `
//   .trim()
//   .split("\n");

console.log("input", input);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const pickedCards = input[1].split(" ").map(Number);
const targetCards = input[3].split(" ").map(Number);

const set = new Set(pickedCards);
let lastSize = set.size;
const result = [];

for (let i = 0; i < targetCards.length; i++) {
  set.add(targetCards[i]);

  if (set.size !== lastSize) {
    result.push(0);
    lastSize++;
  } else {
    result.push(1);
  }
}

console.log(result.join(" "));

console.timeEnd("perf");
