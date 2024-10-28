var promiseObj = new Promise(function (resolve, reject) {
  reject({ error: "Something went wrong" });
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
