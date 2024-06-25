const input = +`9991`.trim();

// console.log(input);

console.time("perf");

// 1차
// const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
let result = "";
let num = input;
let factor = 2;

while (true) {
  if (num % factor === 0) {
    result += factor + "\n";
    num = num / factor;
  } else {
    factor += 1;
    if (factor >= num || factor >= Math.sqrt(input)) {
      num === 1 ? (result = result.slice(0, -1)) : (result += num);
      break;
    }
  }
}

if (input !== 1) console.log(result);

console.timeEnd("perf");
