// const input = `10 500
// 93 181 245 214 315 36 185 138 216 295`
//   .trim()
//   .split("\n")
//   .map((line) => line.split(" ").map(Number));

// console.log("input", input);

console.time("perf");

// 1차

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((line) => line.split(" ").map(Number));

// const [[N, M], cards] = input;

// let max = 0;

// for (let x = 0; x < cards.length - 2; x++) {
//   for (let y = x + 1; y < cards.length - 1; y++) {
//     for (let z = y + 1; z < cards.length; z++) {
//       const result = cards[x] + cards[y] + cards[z];
//       if (result <= M && result > max) max = result;
//     }
//   }
// }

// console.log(max);

// 2차
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((line) => line.split(" ").map(Number));

// const [[N, M], cards] = input;

// cards.sort((a, b) => a - b);

// console.log(cards);

// let max = 0;

// outerLoop: for (let x = 0; x < cards.length - 2; x++) {
//   for (let y = x + 1; y < cards.length - 1; y++) {
//     for (let z = y + 1; z < cards.length; z++) {
//       const result = cards[x] + cards[y] + cards[z];
//       if (result > M) break;
//       if (result > max) max = result;
//       if (max === M) break outerLoop;
//     }
//   }
// }

// console.log(max);

// 3차
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [[N, M], cards] = input;

let max = 0;

outerLoop: for (let x = 0; x < cards.length - 2; x++) {
  for (let y = x + 1; y < cards.length - 1; y++) {
    for (let z = y + 1; z < cards.length; z++) {
      const result = cards[x] + cards[y] + cards[z];
      if (result <= M && result > max) max = result;
      if (max === M) break outerLoop;
    }
  }
}

console.log(max);

console.timeEnd("perf");
