/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 *
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 *
 *
 * 例１）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 *
 * 例２）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */
class Calculator {
  constructor() {
    this.val = null;
    this._operator;
  }
  set(num) {
    switch (this.operator) {
      case "+":
        this.num = this.num + num;
        break;
      case "-":
        this.num = this.num - num;
        break;
      case "*":
        this.num = this.num * num;
        break;
      case "/":
        this.num = this.num / num;
        break;
      default:
        this.num = num;
    }
    console.log(this.num);
    return this;
  }
  plus() {
    this.operator = "+";
    return this;
  }
  minus() {
    this.operator = "-";
    return this;
  }
  mutiply() {
    this.operator = "*";
    return this;
  }
  divide() {
    this.operator = "/";
    return this;
  }
}

const calc = new Calculator();

calc.set(10).minus().set(3).mutiply().set(6).divide().set(2).plus().set(2);
