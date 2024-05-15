const input = `3
124
25
194`
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

console.time("perf");
// 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1).map(Number);
const coins = [25, 10, 5, 1];

input.forEach((num) => {
  let remain = num;
  const cnt = [0, 0, 0, 0];

  coins.forEach((coin, idx) => {
    cnt[idx] = Math.floor(remain / coin);
    remain = remain % coin;
  });

  console.log(cnt.join(" "));
});

console.timeEnd("perf");
