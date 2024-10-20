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

f1.apply(obj1, [50, 60]); //210

f1.apply(obj2, [0, 0]); //200
