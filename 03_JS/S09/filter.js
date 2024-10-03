var data = [10, 20, 30, 40, 15, 80];

var filteredArray = data.filter(function (element, index) {
  return element < 20; //80 > 20  [30,40,80]
});

console.log(filteredArray);
