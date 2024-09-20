const input = `3
0
1
2
3
4
5
6
7
8
9
10
`
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

// console.log("input", input);

console.time("perf");

// // 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1).map(Number);
// const map = new Map();

// const result = input.map((num) => {
//   let idx = num;

//   while (1) {
//     let target = map.get(idx);

//     if (target === undefined) {
//       map.set(idx, isPrime(idx));
//       target = map.get(idx);
//     }

//     if (target) return idx;

//     ++idx;
//   }
// });

// console.log(result.join("\n"));

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num === 2) return true;
//   if (num % 2 === 0) return false;
//   for (let i = 3; i <= parseInt(Math.sqrt(num)); i = i + 2) if (num % i === 0) return false;
//   return true;
// }

// 2ck
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1).map(Number);

// console.log(
//   input
//     .map((num) => {
//       let idx = num;

//       while (1) {
//         if (isPrime(idx)) return idx;
//         ++idx;
//       }
//     })
//     .join("\n")
// );

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num === 2) return true;
//   if (num % 2 === 0) return false;
//   for (let i = 3; i <= Math.sqrt(num); i = i + 2) if (num % i === 0) return false;
//   return true;
// }

// 3차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1).map(Number);
const map = new Map();

console.log(
  input
    .map((num) => {
      let idx = num;

      while (1) {
        let target = map.get(idx);

        if (target === undefined) {
          map.set(idx, isPrime(idx));
          target = map.get(idx);
        }

        if (target) return idx;

        ++idx;
      }
    })
    .join("\n")
);

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i <= Math.sqrt(num); i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

console.timeEnd("perf");
