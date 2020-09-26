function Fruit(name, price, taste) {
  this.name = name;
  this.price = price;
  this.taste = taste;
}

Fruit.prototype.intro = function() {
  return `This fruit name is ${this.name} and price is ${this.price} and taste is ${this.taste}.`;
};

const kiwi = new Fruit('kiwi', 5000, 'good');
kiwi.intro = function() {
  return `${this.name} is modefied!`;
}

const grape = new Fruit('grape', 7000, 'sweet');

console.log('kiwi:', kiwi.intro());
console.log('grape:', grape.intro());

// Order: me → prototype
