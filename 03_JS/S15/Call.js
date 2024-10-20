var obj1 = {
  c: 100,
};

var obj2 = {
  c: 200,
};

function f1(a, b) {
  var result = a + b + this.c;
  console.log(result);
}

f1.call(obj1, 10, 10); //120

f1.call(obj2, 10, 10); //220
