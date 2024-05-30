// const input = +`7`.trim();

console.time("perf");

// 1
const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
let idx = 1;
let layer = 1;
let cnt = 1;
let num = [1, 1];
let isLeft = false;

while (true) {
  if (idx === input) break;

  idx++;
  cnt--;

  num = [isLeft ? ++num[0] : cnt === 0 ? 1 : --num[0], isLeft ? (cnt === 0 ? 1 : --num[1]) : ++num[1]];

  if (cnt === 0) {
    ++layer;
    cnt = layer;
    isLeft = !isLeft;
  }
}

console.log(num.join("/"));

// 2
// const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
// let lvl = 1;
// let acc = 1;
// while (true) {
//   if (input <= acc) break;
//   lvl++;
//   acc = (lvl * (lvl + 1)) / 2;
// }
// const idx = lvl % 2 === 1 ? lvl - acc + input : acc - input + 1;
// console.log(`${lvl - idx + 1}/${idx}`);

//
console.timeEnd("perf");
