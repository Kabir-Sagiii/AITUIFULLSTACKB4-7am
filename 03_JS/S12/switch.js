var fruite = "Jack F";

function printFruitePrice(fruitename) {
  switch (fruitename) {
    case "Apple":
      console.log("Price is $5");
      break;
    case "banana":
      console.log("Price is $3");
      break;
    case "Orange":
      console.log("Price is $10");
      break;
    default:
      console.log("Out of Stock");
  }
}

printFruitePrice(fruite);
