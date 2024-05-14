// const input = `4D2 16`.trim().split(" ");
// const input = `60466175 36`.trim().split(" ");

console.time("perf");
// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const [num, unit] = input;
const convert = (numStr) => (isNaN(numStr) ? numStr.charCodeAt() - 55 : +numStr);
const result = num
  .split("")
  .map((numStr, idx, arr) => convert(numStr) * unit ** (arr.length - idx - 1))
  .reduce((a, c) => a + c);
console.log(result);

console.timeEnd("perf");

console.log(convert(numStr), unit ** (arr.length - idx), convert(numStr) * unit ** idx);
