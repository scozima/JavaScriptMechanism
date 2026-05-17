new Promise(function (resolve, reject) {
  console.log("promise");

  setTimeout(function () {
    resolve("Hello");
    // reject("bye");
  }, 1000);
})
  .then(function (data) {
    console.log("then: " + data);
    // throw new Error();
  })
  .catch(function (data) {
    console.log("catch: " + data);
  })
  .finally(function (data) {
    console.log("finally");
  });

console.log("global end");
