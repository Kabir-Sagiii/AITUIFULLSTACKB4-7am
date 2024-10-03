var user = {
  name: "Raj",
  gender: "male",
  address: {
    city: "mumbai",
    state: "MH",
    pin: 123456,
  },
};
user.address.area = "area1";
console.log(user.address);
console.log(user["address"]["state"]);
