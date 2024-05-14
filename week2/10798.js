const input1 = `ABCDE
abcde
01234
FGHIJ
fghij`
  .trim()
  .split("\n");
const result1 = "Aa0FfBb1GgCc2HhDd3IiEe4Jj";

const input2 = `AABCDD
afzz
09121
a8EWg6
P5h3kx`
  .trim()
  .split("\n");
const result2 = "Aa0aPAf985Bz1EhCz2W3D1gkD6x";

console.time("perf");

// const input = input2;

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let result = "";
for (let i = 0; i < 15; i++) for (let j = 0; j < 5; j++) if (input[j][i]) result += input[j][i];
console.log(result);

// 2차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const arr = [];
// const matrix = input.map((row) => row.split(""));
// for (let i = 0; i < 15; i++) for (let j = 0; j < 5; j++) if (matrix[j][i]) arr.push(matrix[j][i]);
// console.log(arr.join(""));

console.timeEnd("perf");
