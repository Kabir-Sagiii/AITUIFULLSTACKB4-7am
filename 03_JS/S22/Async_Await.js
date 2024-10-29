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

async function accessData() {
  try {
    var res = await myFetch(false);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

accessData();
