console.time("Number");

let target = 1000000;

for (let i = 0; i < target; i++) {
  let digit = i;
  let sum = i;

  while (digit > 0) {
    sum += digit % 10;
    digit = Math.floor(digit / 10);
  }
}

console.timeEnd("Number");

console.time("String");

let target2 = 1000000;

for (let i = 0; i < target2; i++) {
  let sum2 = target2;

  sum2 += target2
    .toString()
    .split("")
    .reduce((a, c) => +a + +c, 0);
}

console.timeEnd("String");
