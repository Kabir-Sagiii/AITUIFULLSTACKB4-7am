var obj = {
  username: "Anuj Sharma",
  id: 101,
  city: "pune",
};

console.log(obj);
console.log("=============================================");

delete obj.id;
delete obj["city"];
console.log(obj);
