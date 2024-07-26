// const input = +`500`.trim();

// console.log("input", input);

console.time("perf");

// 1차
const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

let cnt = 1;
let idx = 666;

while (true) {
  if (cnt === input) break;

  idx++;
  let continueCnt = 0;
  let num = idx;

  while (true) {
    if (num % 10 === 6) continueCnt++;
    else continueCnt = 0;

    num = Math.floor(num / 10);

    if (num < 1 || continueCnt === 3) break;
  }

  if (continueCnt === 3) cnt++;
}

console.log(idx);

console.timeEnd("perf");
