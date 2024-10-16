function fnNode() {
  console.log(this);
}

// fnNode();

const fnArrow = () => {
  console.log(this);
};

// fnArrow();

var obj1 = {
  name: "Sagar",

  fn: function f1() {
    console.log(this);
  },

  fnArrow: () => {
    console.log(this);
  },
};

obj1.fn();
obj1.fnArrow();
