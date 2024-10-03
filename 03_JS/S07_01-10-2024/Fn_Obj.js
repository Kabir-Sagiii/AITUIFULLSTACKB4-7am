var obj = {
  name: "Rohan",

  gender: "male",

  display: function f1() {
    console.log("f1 is called");
  },

  print: function () {
    console.log("product is printed");
  },

  changeAddress: () => {
    console.log("address got changed");
  },
};

obj.display();
obj.print();
obj.changeAddress();
