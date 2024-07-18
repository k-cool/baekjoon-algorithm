const input = +`11234`.trim();

// console.log("input", input);

console.time("perf");

// 1차
// const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
// let result = 0;

// for (let i = 1; i < input; i++) {
//   const sSum =
//     i +
//     i
//       .toString()
//       .split("")
//       .reduce((a, c) => +a + +c, 0);

//   if (sSum === input) {
//     result = i;
//     break;
//   }
// }

// console.log(result);

// 2
// const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
let result = 0;

for (let i = 1; i < input; i++) {
  let sum = i;
  let target = i;

  while (target > 0) {
    sum += target % 10;
    target = Math.floor(target / 10);
  }

  if (sum === input) {
    result = i;
    break;
  }
}

console.log(result);

console.timeEnd("perf");
