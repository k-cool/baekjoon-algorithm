const input = `3
3 7
15 7
5 2`
  .trim()
  .split("\n")
  .slice(1);

console.time("perf");

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);
const positionSet = new Set();

const pushPosition = ([x, y]) => {
  for (let i = +x; i < +x + 10; i++) {
    for (let j = +y; j < +y + 10; j++) {
      !positionSet.has(`${i} ${j}`) && positionSet.add(`${i} ${j}`);
    }
  }
};

input.forEach((point) => {
  pushPosition(point.split(" "));
});

console.log(positionSet.size);

// 2

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);
// const positions = [];

// for (let i = 0; i < 100; i++)
//   positions.push([
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   ]);

// const checkPosition = ([x, y]) => {
//   const numX = x - 1;
//   const numY = y - 1;
//   for (let i = numX; i < numX + 10; i++) {
//     for (let j = numY; j < numY + 10; j++) {
//       if (!positions[i][j]) positions[i][j] = 1;
//     }
//   }
// };

// input.forEach((point) => {
//   checkPosition(point.split(" "));
// });

// console.log(positions.flat().filter((el) => el).length);

// 3
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);

// const getPositionArr = ([x, y]) => {
//   let arr = [];
//   for (let i = +x; i < +x + 10; i++) {
//     for (let j = +y; j < +y + 10; j++) {
//       arr.push(`${i} ${j}`);
//     }
//   }
//   return arr;
// };

// const getUnion = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

// const positionSet = input.reduce((accArr, curPoint) => {
//   const curArr = getPositionArr(curPoint.split(" "));
//   return getUnion(accArr, curArr);
// }, []);

// console.log(positionSet.length);

console.timeEnd("perf");
