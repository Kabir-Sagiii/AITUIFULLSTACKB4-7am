function myFetch(valid) {
  return new Promise(function (resolve, reject) {
    if (valid) {
      resolve({
        data: [{}, {}, {}],
        status: "success",
      });
    } else {
      reject({
        error: "failed to save in the database",
        status: "failure",
      });
    }
  });
}

myFetch(true)
  .then((res) => {
    console.log("then");
    console.log(res);
  })
  .catch((error) => {
    console.log("catch");
    console.log(error);
  });

// var promiseObj = myFetch(false);

// promiseObj
//   .then((res) => {
//     console.log("then");
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log("catch");
//     console.log(error);
//   });
