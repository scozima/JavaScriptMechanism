// function sleep(val) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log(val++);
//       resolve(val);
//     }, val * 500);
//   });
// }

// Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then(function (data) {
//   console.log(data);
// });

const seconds = new Date().getSeconds();
const isEven = seconds % 2 === 0;

function delayLog(message) {
  setTimeout(() => console.log(message), 1000);
}

new Promise(function (resolve, reject) {
  isEven ? resolve() : reject();
})
  .then(() => delayLog("resolve: 偶数です"))
  .catch(() => delayLog("resolve: 奇数です"))
  .finally(() => setTimeout(() => console.log("処理を終了します。"), 1500));
