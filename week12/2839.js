const input = +`4996`.trim();

console.log("input", input);

console.time("perf");

// 1차
// const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

let fCnt = Math.floor(input / 5);
let tCnt = 0;

let loop = 0;
while (true) {
  loop++;
  if (fCnt * 5 + tCnt * 3 === input) break;

  if (fCnt * 5 + tCnt * 3 > input) {
    --fCnt;
    tCnt = 0;
  }

  if (fCnt < 0) break;

  tCnt++;
}

console.log("loop", loop);

console.log(fCnt === -1 ? fCnt : fCnt + tCnt);

console.timeEnd("perf");
