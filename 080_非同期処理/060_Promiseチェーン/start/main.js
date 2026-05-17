function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

sleep(0).then(function (val) {
  return sleep(val);
});

// アロー関数に書き換え
// sleep(0).then(val => sleep(val));
