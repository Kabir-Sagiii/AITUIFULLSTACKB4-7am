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

// var x = f1.bind(obj1);
// x(100, 200);

// var f1 = f1.bind(obj1);
// f1(100, 200);

// var f1 = f1.bind(obj2, 10, 10);
// f1();

// f1.bind(obj2, 10, 10)();

f1.bind(obj2)(10, 10);
