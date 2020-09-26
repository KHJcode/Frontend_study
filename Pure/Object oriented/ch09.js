class Me {
  constructor(name, score, age) {
    this.name = name;
    this.score = score;
    this.age = age;
  }
  
  intro() {
    return `My name is ${this.name} and ${this.age} years old. My score is ${this.score}.`;
  }
}

const khj = new Me('KHJcode', 100, 16);
const tom = new Me('Tom', 90, 11);
tom.intro = function() {
  return `${this.name} is modefied!`;
};

console.log('khj:', khj.intro());
console.log('tom:', tom.intro());
