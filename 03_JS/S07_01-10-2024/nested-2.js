var product = {
  brand: "Apple",
  model: "Iphone 16 Pro Max",
  price: 145000,
  rating: {
    rate: 4.6,
    count: {
      mens: 999,
      womens: 1300,
    },
  },
}; //

var value = product.rating.count.mens;
console.log(value);
