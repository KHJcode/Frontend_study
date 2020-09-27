class Me {
  constructor(name, score, age) {
    this.name = name;
    this.score = score;
    this.age = age;
  }

  getName() { return this.name; }

  getAge() { return this.age; }

  getScore() { return this.score; }
}

class MePlus extends Me {
  constructor(name, score, age) {
    super(name, score, age);
  }

  intro() {
    return `My name is ${super.getName()} and ${super.getAge()} years old. My score is ${super.getScore()}.`;
  }
}

const khj = new MePlus('KHJcode', 100, 16);
const tom = new Me('Tom', 90, 11);
tom.intro = function() {
  return `${this.name}'s intro is not created.`;
};

console.log('khj:', khj.intro());
console.log('khj age:', khj.getAge());
console.log('khj name:', khj.getName());

console.log('tom:', tom.intro());
console.log('tom score:', tom.getScore());
