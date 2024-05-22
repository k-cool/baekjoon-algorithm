// const input = +`5`.trim();

console.time("perf");

// 1차
const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
const f = (n) => (n === 1 ? 3 : f(n - 1) * 2 - 1);
console.log(f(input) ** 2);

//
console.timeEnd("perf");
