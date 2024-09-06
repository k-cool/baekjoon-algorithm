const input = `ababa`.trim();

console.log("input", input);

console.time("perf");

// 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// const set = new Set();

// for (let i = 1; i <= input.length; i++) {
//   for (let j = 0; j <= input.length - i; j++) {
//     set.add(input.slice(j, j + i));
//   }
// }

// console.log(set.size);

// 1차
// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const root = {
  isWord: false,
  childs: new Map(),
};

let count = 0;

for (let i = 0; i < input.length; i++) {
  let current = root;

  for (let j = i; j < input.length; j++) {
    console.log(i, j, "count:", count);

    const c = input[j];

    if (!current.childs.has(c)) {
      current.childs.set(c, { isWord: false, childs: new Map() });
    }

    current = current.childs.get(c);

    console.log("c:", c, current);

    if (!current.isWord) {
      count++;
      current.isWord = true;
    }
  }
}

console.log(count);

console.timeEnd("perf");
