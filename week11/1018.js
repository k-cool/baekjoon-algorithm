// const input = `11 12
// BWWBWWBWWBWW
// BWWBWBBWWBWW
// WBWWBWBBWWBW
// BWWBWBBWWBWW
// WBWWBWBBWWBW
// BWWBWBBWWBWW
// WBWWBWBBWWBW
// BWWBWBWWWBWW
// WBWWBWBBWWBW
// BWWBWBBWWBWW
// WBWWBWBBWWBW`
//   .trim()
//   .split("\n");

// console.log("input", input);

console.time("perf");

// 1차
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const inputBoard = input.map((line) => line.split(""));

const getTargetBoard = (x, y) => {
  const targetBoard = [];
  for (let i = x; i < x + 8; i++) targetBoard.push(inputBoard[i].slice(y, y + 8));

  return targetBoard;
};

const countChanges = (board, targetColor) => {
  const row = board.length;
  const col = board[0].length;
  let norm = targetColor;

  let cnt = 0;

  for (let i = 0; i < row; i++) {
    if (i !== 0) norm = norm === "W" ? "B" : "W";

    for (let j = 0; j < col; j++) {
      const isColEven = j % 2 === 0;
      const cur = board[i][j];

      if (isColEven) cur === norm ? null : cnt++;
      else cur !== norm ? null : cnt++;
    }
  }

  return cnt;
};

// main
const resultArr = [];

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    const targetBoard = getTargetBoard(i, j);
    resultArr.push(countChanges(targetBoard, "W"));
    resultArr.push(countChanges(targetBoard, "B"));
  }
}

console.log(Math.min(...resultArr));

console.timeEnd("perf");
