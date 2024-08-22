const input = `6
1000 999 1000 999 1000 999
`
  .trim()
  .split("\n")[1]
  .split(" ")
  .map(Number);

console.log("input", input);

console.time("perf");

// 1차 -> 시간초과
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")[1].split(" ").map(Number);
// const arr = [...new Set([...input].sort((a, b) => a - b))];
// console.log(input.map((item) => arr.indexOf(item)).join(" "));

// 2차 -> 메모리초과
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")[1].split(" ").map(Number);

// const memo = {};
// const set = new Set(input);

// console.log(
//   input
//     .map((num) => {
//       if (memo[num]) return memo[num];
//       // [...set]을 사용하면 새로운 배열을 생성하기 때문에 배열이 길 경우 메모리 문제가 될 수 있음
//       memo[num] = [...set].reduce((a, c) => (c < num ? ++a : a), 0);
//       return memo[num];
//     })
//     .join(" ")
// );

// 3차 -> 시간초과
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")[1].split(" ").map(Number);
// const arr = [...new Set([...input].sort((a, b) => a - b))];
// let result = "";

// input.forEach((num) => (result += `${arr.indexOf(num)} `));

// console.log(result.trim());

// 4차 -> 통과 1980ms
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")[1].split(" ").map(Number);
// const arr = [...new Set([...input].sort((a, b) => a - b))];
// const memo = {};

// arr.forEach((num, idx) => (memo[num] = idx));
// console.log(input.map((num) => memo[num]).join(" "));

// 5차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")[1].split(" ").map(Number);
const arr = Array.from(new Set(input)).sort((a, b) => a - b);
const memo = new Map();

arr.forEach((num, idx) => memo.set(num, idx));
console.log(input.map((num) => memo.get(num)).join(" "));

console.timeEnd("perf");
