const input = `5
6
8
10
12
100
`
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

// console.log("input", input);

console.time("perf");

// // 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1).map(Number);

// const primeArr = getPrimeArr(Math.max(...input));
// const primeSet = new Set(primeArr);
// const result = [];

// input.forEach((num) => {
//   let cnt = 0;

//   for (let i = 0; i < primeArr.length; i++) {
//     if (primeArr[i] > num / 2) break;
//     if (primeSet.has(num - primeArr[i])) ++cnt;
//   }

//   result.push(cnt);
// });

// console.log(result.join("\n"));

// function getPrimeArr(num) {
// const arr = Array.from({ length: num + 1 }, (_, i) => i).fill(false, 0, 2);

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (arr[i]) {
//       for (let j = i * i; j <= num; j += i) {
//         arr[j] = false;
//       }
//     }
//   }

//   return arr.filter((item) => item !== false);
// }

// 2차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1).map(Number);
const primeArr = getPrimeArr(Math.max(...input));
const result = [];

input.forEach((num) => {
  let cnt = 0;

  for (let i = 1; i <= (num + 1) / 2; i++) {
    if (primeArr[i] && primeArr[num - i]) ++cnt;
  }

  result.push(cnt);
});

console.log(result.join("\n"));

function getPrimeArr(num) {
  const arr = Array(num + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr;
}

console.timeEnd("perf");
