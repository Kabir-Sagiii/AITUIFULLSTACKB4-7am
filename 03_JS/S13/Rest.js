function f1(x, y, ...p) {
  //   console.log(p1, p2, p3);
  console.log(x);
  console.log(y);
  p.forEach((ele) => {
    console.log(ele);
  });
}

f1(10, 20, 30, 40, 50);
