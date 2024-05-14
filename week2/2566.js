// const input = `3 23 85 34 17 74 25 52 65
// 10 7 39 42 88 52 14 72 63
// 87 42 18 78 53 45 18 84 53
// 34 28 64 85 12 16 75 36 55
// 21 77 45 35 28 75 90 76 1
// 25 87 65 15 28 11 37 28 74
// 65 27 75 41 7 89 78 64 39
// 47 47 70 45 23 65 3 41 44
// 87 13 82 38 31 12 29 29 80`.split("\n");

// 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// let max = 0;
// let xy = "1 1";
// input.forEach((row, i) =>
//   row.split(" ").forEach((item, j) => {
//     if (+item > max) {
//       max = +item;
//       xy = `${i + 1} ${j + 1}`;
//     }
//   })
// );
// console.log(max + "\n" + xy);

// 2차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.map((row) => row.split(" ").map(Number));
let max = 0;
let xy = "1 1";
for (let i = 0; i < 9; i++)
  for (let j = 0; j < 9; j++)
    if (arr[i][j] > max) {
      max = arr[i][j];
      xy = `${i + 1} ${j + 1}`;
    }
console.log(max + "\n" + xy);
