console.time("Number");
let target = 1111111111;
let sum = target;

while (target > 0) {
  sum += target % 10;
  target = Math.floor(target / 10);
}

console.timeEnd("Number");

console.time("String");
let target2 = 1111111111;
let sum2 = target2;

sum2 += target2
  .toString()
  .split("")
  .reduce((a, c) => +a + +c, 0);

console.timeEnd("String");
