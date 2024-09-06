// const input = `26 5
// Bulbasaur
// Ivysaur
// Venusaur
// Charmander
// Charmeleon
// Charizard
// Squirtle
// Wartortle
// Blastoise
// Caterpie
// Metapod
// Butterfree
// Weedle
// Kakuna
// Beedrill
// Pidgey
// Pidgeotto
// Pidgeot
// Rattata
// Raticate
// Spearow
// Fearow
// Ekans
// Arbok
// Pikachu
// Raichu
// 25
// Raichu
// 3
// Pidgey
// Kakuna
// `
//   .trim()
//   .split("\n")
//   .map((line, idx) => (idx === 0 ? line.split(" ").map(Number) : line));

// const [[N, M], ...strs] = input;

// console.log("input", input);

console.time("perf");

// 1차
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((line, idx) => (idx === 0 ? line.split(" ").map(Number) : line));

// const [[N, M], ...strs] = input;
// const book = strs.slice(0, N);
// const questions = strs.slice(N);

// const map = new Map();
// book.forEach((item, idx) => {
//   map.set(item, idx + 1);
// });

// console.log(questions.map((item) => (isNaN(parseInt(item)) ? map.get(item) : book[item - 1])).join("\n"));

// map.set(idx + 1, item);
// console.log(questions.map((item) => map.get(isNaN(parseInt(item)) ? item : +item)).join("\n"));

// 2차
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line, idx) => (idx === 0 ? line.split(" ").map(Number) : line));

const [[N, M], ...strs] = input;
const book = strs.slice(0, N);
const questions = strs.slice(N);

const map = new Map();
book.forEach((item, idx) => {
  map.set(item, idx + 1);
  map.set(idx + 1, item);
});

console.log(questions.map((item) => map.get(isNaN(parseInt(item)) ? item : +item)).join("\n"));

console.timeEnd("perf");
