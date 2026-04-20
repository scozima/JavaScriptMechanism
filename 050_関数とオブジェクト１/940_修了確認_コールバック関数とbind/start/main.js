/**
 * 問題：
 * 【修了確認】コールバック関数で実装したcalcFactoryを
 * １秒後にconsole.logまたはalertで計算式が表示される
 * ようにcalcFactory関数内の実装を変更してみてください。
 */
function calcFactory(val, callback) {
  function callbackAfter1s(str) {
    setTimeout(callback.bind(null, str), 10);
  }
  return {
    plus: function (target) {
      const newVal = val + target;
      callbackAfter1s(`${val} + ${target} = ${newVal}`);
      val = newVal;
    },
  };
}

const calc = calcFactory(10, console.log);
calc.plus(5);
