const input = +`1000000`.trim();
// console.log("input", input);

console.time("perf");

// // 1차
// const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
// let openCnt = 0;

// for (let i = 1; i <= input; i++) {
//   if (getDivNum(i) % 2 === 1) ++openCnt;
// }

// console.log(openCnt);

// function getDivNum(num) {
//   let cnt = 0;
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) cnt += i * i === num ? 1 : 2;
//   }
//   return cnt;
// }

// 2차
// const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
// if (input <= 2) return 1;

// const arr = Array.from({ length: input }, (_, idx) => (idx + 1) % 2);

// for (let i = 3; i <= input; i++) {
//   for (let j = i - 1; j <= input - 1; j += i) {
//     arr[j] = arr[j] === 1 ? 0 : 1;
//   }
// }

// console.log(arr.reduce((a, c) => (c ? ++a : a), 0));

// 3

// const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
// let openCnt = 1;

// for (let i = 2; i <= input; i++) {
//   if (isPrime(i)) continue;
//   if (getDivNum(i) % 2 === 1) ++openCnt;
// }

// console.log(openCnt);

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

// function getDivNum(num) {
//   let cnt = 0;
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) cnt += i * i === num ? 1 : 2;
//   }
//   return cnt;
// }

// 4
// const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
// let openCnt = 0;
// for (let i = 1; i * i <= input; i++) ++openCnt;
// console.log(openCnt);

// 5
const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(Math.floor(Math.sqrt(input)));

console.timeEnd("perf");
