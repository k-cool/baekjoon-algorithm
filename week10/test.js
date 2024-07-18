console.time("Number");

let num = 0;
for (let i = 0; i < 1000000; i++) {
  num += 1;
}

console.timeEnd("Number");

console.time("String");

let str = "";
for (let i = 0; i < 1000000; i++) {
  str += "1";
}

console.timeEnd("String");
