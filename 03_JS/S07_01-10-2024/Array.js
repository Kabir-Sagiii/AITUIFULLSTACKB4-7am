var arr = [
  10,
  20,
  30,
  40,
  true,
  "Hello",
  { names: ["rohan", "raj"] },
  function f1() {
    console.log("hi");
  },
];

//access any specific element from the array
var ele1 = arr[0];
console.log(ele1);

arr[7]();
