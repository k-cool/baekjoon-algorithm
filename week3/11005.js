const input = `1000000000 16`.trim().split(" ");
// const input = `60466175 36`.trim().split(" ");

console.time("perf");
// 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const [num, unit] = input;
let arr = [];
let share = +num;
let remain = 0;

const convert = (num) => (num < 10 ? String(num) : String.fromCharCode(65 + num - 10));

while (share >= unit) {
  remain = share % unit;
  share = Math.floor(share / unit);
  arr.push(convert(remain));
}

arr.push(convert(share));

console.log(arr.reverse().join(""));

console.timeEnd("perf");

// console.log(arr);
// console.log("before", unit, share, remain);
// console.log("push", remain, convert(remain));
// console.log("push", remain, convert(remain));
// console.log("affter", unit, share, remain);
