// const input = `2735 1`.trim().split(" ").map(Number);
// const input = `25 4`.trim().split(" ").map(Number);
const input = `6 3`.trim().split(" ").map(Number);

console.time("perf");

// 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
// let idx = 1;
// let cnt = 0;

// while (true) {
//   if (input[0] % idx === 0) {
//     cnt++;
//     if (cnt === input[1]) break;
//   }

//   idx++;

//   if (idx > input[0]) {
//     idx = 0;
//     break;
//   }
// }

// console.log(idx);

// 2차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let result;
let cnt = 0;

for (let i = 0; i < input[0] + 1; i++) {
  if (input[0] % i === 0) {
    cnt++;
    if (cnt === input[1]) {
      result = i;
      break;
    }
  }

  if (i === input[0]) result = 0;
}

console.log(result);

//
console.timeEnd("perf");
