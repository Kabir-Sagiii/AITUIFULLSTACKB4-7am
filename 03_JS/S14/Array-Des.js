var info = ["Raj", "Delhi", 1010101, "male"];

var [x, y, , gender] = info;

function f1() {
  console.log(y, x, gender);
}

f1();

function f2() {
  console.log(y, x);
}
f2();
