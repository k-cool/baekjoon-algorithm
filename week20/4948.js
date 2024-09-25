const input = `1
10
13
100
1000
10000
100000
0
`
  .trim()
  .split("\n")
  .slice(0, -1)
  .map(Number);

// console.log("input", input);

console.time("perf");

// // 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(0, -1).map(Number);

// const map = new Map();
// const result = [];

// input.forEach((num) => {
//   let cnt = 0;

//   for (let i = num + 1; i <= num * 2; i++) {
//     let target = map.get(i);

//     if (target === undefined) {
//       target = isPrime(i);
//       map.set(i, target);
//     }

//     if (target) ++cnt;
//   }

//   result.push(cnt);
// });

// console.log(result.join("\n"));

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;
//   if (num % 2 === 0 || num % 3 === 0) return false;

//   for (let i = 5; i <= Math.sqrt(num); i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// 2차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(0, -1).map(Number);

// const max = Math.max(...input);
// const map = new Map();
// const result = [];

// for (let i = 1; i <= max * 2; i++) map.set(i, isPrime(i));

// input.forEach((num) => {
//   let cnt = 0;
//   for (let i = num + 1; i <= num * 2; i++) if (map.get(i)) ++cnt;
//   result.push(cnt);
// });

// console.log(result.join("\n"));

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;
//   if (num % 2 === 0 || num % 3 === 0) return false;

//   for (let i = 5; i <= Math.sqrt(num); i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// 3차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(0, -1).map(Number);
// const isPrimeArr = getIsPrimeArr(Math.max(...input) * 2);
// const result = [];

// input.forEach((num) => {
//   let cnt = 0;

//   for (let i = num + 1; i <= num * 2; i++) {
//     if (isPrimeArr[i]) ++cnt;
//   }

//   result.push(cnt);
// });

// console.log(result.join("\n"));

// function getIsPrimeArr(num) {
//   const arr = Array(num + 1)
//     .fill(true)
//     .fill(false, 0, 2);

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (arr[i]) {
//       for (let j = i * i; j <= num; j += i) {
//         arr[j] = false;
//       }
//     }
//   }

//   return arr;
// }

console.timeEnd("perf");
