function f1() {
  //-----
  //-----
  return {
    name: "sagar",
    city: "Pune",
  };
}

var { name, city } = f1();
console.log(name, city);

function f2() {
  //----
  //-----

  return [
    "Hello",
    () => {
      console.log("Dummy fn");
    },
  ];
}
// let myArray = f2();

// myArray[1]();

let [data, myfun] = f2();

myfun();
