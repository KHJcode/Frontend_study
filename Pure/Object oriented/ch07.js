// constructor

console.log('Date:', new Date);

function Person(name = 'KHJcode', score = 100, age = 0) {
  this.name = name;
  this.score = score;
  this.age = age;
  this.intro = function() {
    return `Username is ${this.name}. Score is ${this.score}. Age is ${this.age}.`;
  };
}

console.log('Person:', Person);
console.log('new Person:', new Person);

const Tom = new Person('Tom', 90, 15);
const Amy = new Person('Amy', 95, 16);

console.log('Tom:', Tom);
console.log('Amy:', Amy);
