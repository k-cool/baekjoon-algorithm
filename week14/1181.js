// const input = `13
// but
// i
// wont
// hesitate
// no
// more
// no
// more
// it
// cannot
// wait
// im
// yours
// `
//   .trim()
//   .split("\n")
//   .slice(1);

console.log("input", input);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);

const words = new Set(input);

console.log(
  [...words]
    .sort((a, b) => {
      // 길이가 동일하므로 사전식 정렬 오름차순
      if (a.length === b.length) {
        let i = 0;
        let result = 0;

        while (true) {
          if (a.charCodeAt(i) !== b.charCodeAt(i)) result = a.charCodeAt(i) - b.charCodeAt(i);
          if (result) break;
          i++;
          if (i > a.length - 1) break;
        }

        return result;
      }

      // 길이가 동일하지 않을 경우 길이순 오름차순
      return a.length - b.length;
    })
    .join("\n")
);

console.timeEnd("perf");
