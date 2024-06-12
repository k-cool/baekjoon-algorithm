const input = `6
12
28
-1`
  .trim()
  .split("\n")
  .map(Number);

console.time("perf");

// console.log(input);

// 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const factor = (num) => {
  if (num === -1) return;
  const arr = [];
  let acc = 0;

  for (let i = 0; i < Math.sqrt(num); i++)
    if (num % i === 0) {
      arr.push(i);
      arr.push(num / i);
      acc += i;
      acc += num / i;
    }

  acc -= arr.sort((a, b) => a - b).pop();
  return acc === num ? `${num} = ` + arr.join(" + ") : `${num} is NOT perfect.`;
};

input.forEach((num) => {
  const f = factor(num);
  f && console.log(f);
});

//
console.timeEnd("perf");
