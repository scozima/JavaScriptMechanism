function User(name, age) {
  this.name = name;
  this.age = age;
}

// prototype（プロトタイプ）を使って、すべてのUserが使える「機能（メソッド）」を追加します
User.prototype.hello = function () {
  console.log("こんにちは、私の名前は" + this.name + "です！");
};

function newOpe(C, ...args) {
  const _this = Object.create(C.prototype);

  const result = C.apply(_this, args);

  if (typeof result === "object" && result !== null) {
    return result;
  }

  return _this;
}

const user1 = newOpe(User, "Bob", 23);
const user2 = newOpe(User, "Tim", 30);

console.log("1人目のユーザー:", user1);
console.log("2人目のユーザー:", user2);

user1.hello();
user2.hello();
