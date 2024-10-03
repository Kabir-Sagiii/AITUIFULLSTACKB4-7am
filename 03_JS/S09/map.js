var data = [10, 20, 30, 40];

var newArray = data.map(function (element, index) {
  var newdata = element * 100;

  return newdata; //[1000,2000,3000,4000]
});

console.log(newArray);
