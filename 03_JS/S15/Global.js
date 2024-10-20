var name = "Raj"; //Global Scope
let city = "mumbai";
function f1() {
  console.log(name, city);
  var gender = "male"; //function scope
}

function f2() {
  console.log(name, city);
  f1();
  function f3() {
    console.log("f3 is called");
  }
  f3();
}

f3(); //Invalid

console.log(name, city);
f2();
