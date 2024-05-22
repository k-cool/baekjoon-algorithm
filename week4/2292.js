const input = +`10000`.trim();

console.time("perf");

// 1
// const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
// const f = (n) => (n === 1 ? 2 : f(n - 1) + 6 * (n - 2));
// let result = 1;
// while (input >= f(result + 1)) result++;
// console.log(result);

// 2
// const memo = { 1: 2 };
// const f = (n) => {
//   if (memo[n]) return memo[n];
//   memo[n] = f(n - 1) + 6 * (n - 2);
//   return memo[n];
// };
// console.log(result);

// 3
// const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
let result = 1;
let acc = 2;
while (input >= acc) {
  acc += 6 * result;
  result++;
}
console.log(result);

//
console.timeEnd("perf");
