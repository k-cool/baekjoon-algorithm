const input = `1
64`
  .trim()
  .split("\n")
  .map(Number);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const [M, N] = input;
const sosu = [];

for (let i = 0; i < N - M + 1; i++) {
  let cnt = 0;

  for (let j = 1; j < Math.sqrt(M + i) + 1; j++) {
    if ((M + i) % j === 0) {
      cnt++;
      if (cnt >= 2) break;
    }
  }

  if (cnt < 2) sosu.push(M + i);
}

if (M === 1) sosu.shift();

if (sosu.length === 0) console.log(-1);
else {
  const sum = sosu.reduce((acc, cur) => acc + cur, 0);
  console.log(sum + "\n" + Math.min(...sosu));
}

//
console.timeEnd("perf");
