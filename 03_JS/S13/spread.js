var obj1 = {
  id: 101,
  name: "sagar",
  gender: "male",
};

var obj2 = { ...obj1, city: "Pune", name: "Raj Verma" };

// console.log(obj1);
// console.log("--------------------------------------------");
// console.log(obj2);

var arr1 = [true, 10, 20, "hello"];
var arr = [99, 88, 77];
var arr2 = [10, ...arr1, ...arr, "mynewelement"];

console.log(arr1);
console.log("------------------");
console.log(arr2);
