var x = 10;
function f1() {
  console.log("f1 is called");
}

function f2() {
  console.log("f2 is called");
}

// x >= 15 ? console.log("Hello") : console.log("Hi");

x >= 10 ? f1() : f2();
