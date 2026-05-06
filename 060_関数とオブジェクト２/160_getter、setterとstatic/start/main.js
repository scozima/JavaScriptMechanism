class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    console.log("hello");
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  static hello() {
    console.log("hello");
  }
}

const p = new Person("Shimpei", 41);
console.log(p);

Person.hello();
