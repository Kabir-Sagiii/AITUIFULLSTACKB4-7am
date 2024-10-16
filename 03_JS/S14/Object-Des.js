var obj = {
  name: "Rohan",
  city: "Hyderabad",
  gender: "male",
  address: {
    state: "TS",
    pin: 500016,
  },
};

var {
  city,
  name,
  address: { state, pin },
} = obj;

function f1() {
  console.log(city, name, state);
}

function f2() {
  console.log(city, name, pin);
}

console.log(city, name);
f1();
f2();
