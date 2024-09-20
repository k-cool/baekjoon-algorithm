// const input = `1 1000000`.trim().split(" ").map(Number);

// console.log("input", input);

console.time("perf");

// // 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1).map(Number);
// const [M, N] = input;

// const result = [];
// for (let i = M; i < N; i++) if (isPrime(i)) result.push(i);
// console.log(result.join("\n"));

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;
//   if (num % 2 === 0 || num % 3 === 0) return false;

//   for (let i = 5; i <= Math.sqrt(num); i += 6)
//     if (num % i === 0 || num % (i + 2) === 0) {
//       return false;
//     }

//   return true;
// }

// 2차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [M, N] = input;

const result = [];
for (let i = M; i <= N; i++) if (isPrime(i)) result.push(i);
console.log(result.join("\n"));

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i <= Math.sqrt(num); i += 6)
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }

  return true;
}

console.timeEnd("perf");
