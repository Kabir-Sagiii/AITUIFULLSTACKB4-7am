function f1(x) {
  console.log("f1 is called");
  x();
}

function f2() {
  console.log("f2 is called");
}

f1(f2); // Passing f2 function as a argument to the f1 function

f1(function f3() {
  console.log("f3 is called");
});

f1(function () {
  console.log("Anonymous is called");
});

f1(() => {
  console.log("Arrow function is called");
});
