const str = "4 3\n 1 1 1 \n 2 2 2\n 0 1 0\n 3 3 3\n 1 1 1\n  1 1 1\n 4 4 4\n 5 5 100";
const ip = str.toString().trim().split("\n");

// 1회
// const fs = require("fs");
// const [nm, ...ip] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const [n, m] = nm.trim().split(" ");
// const A = ip.slice(0, n).map((el) => el.trim().split(" "));
// const B = ip.slice(n, 2 * n).map((el) => el.trim().split(" "));
// for (let i = 0; i < n; i++) {
//   let h;
//   for (let j = 0; j < m; j++) h = j === 0 ? +A[i][j] + +B[i][j] : h + " " + (+A[i][j] + +B[i][j]);
//   console.log(h);
// }

// 2회
// const ip = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = ip.shift().split(" ");
for (let i = 0; i < n; i++) {
  const a = ip[i].split(" ");
  const b = ip[i + +n].split(" ");
  const r = [];
  for (let j = 0; j < m; j++) r.push(+a[j] + +b[j]);
  console.log(r.join(" "));
}
