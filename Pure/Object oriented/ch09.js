class Me {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  getName() { return this.name; };

  getScore() { return this.score; }
}

class MePlus extends Me {
  constructor(name, score, age) {
    super(name, score);
    this.age = age;
  }

  intro() {
    return `My name is ${super.getName()} and ${this.getAge()} years old. My score is ${super.getScore()}.`;
  }

  getAge() {
    return this.age;
  }
}

const khj = new MePlus('KHJcode', 100, 16);
const tom = new Me('Tom', 90, 11);
tom.intro = function() {
  return `${this.name}'s intro is not created.`;
};

console.log('- - - Me - - -');
console.log('tom:', tom.intro());
// console.log('tom age:', tom.getAge()); => Error
console.log('tom name:', tom.getName())
console.log('tom score:', tom.getScore());

console.log('\n- - - MePlus - - -');
console.log('khj:', khj.intro());
console.log('khj age:', khj.getAge());
console.log('khj name:', khj.getName());
console.log('khj score:', khj.getScore());
