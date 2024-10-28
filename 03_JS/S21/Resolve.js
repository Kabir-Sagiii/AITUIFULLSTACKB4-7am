var promiseObj = new Promise(function (resolve, reject) {
  resolve("Kabir Sagar");
});

// console.log(promiseObj);

promiseObj
  .then(function (success) {
    console.log("then is called");
    console.log(success);
  })
  .catch(function (error) {
    console.log("error is called");
    console.log(error);
  });
