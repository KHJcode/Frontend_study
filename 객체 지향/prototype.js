function Person(name, first, second, third) {
    this.name = name,
    this.first = first,
    this.second = second,
    this.third = third
}

Person.prototype.sum = function(){
    return 'prototype: '+(this.first + this.second + this.third);
}

var kim = new Person('kim', 10, 20, 30);
kim.sum = function(){
    return 'this: '+(this.first + this.second + this.third);
}

var lee = new Person('lee', 10, 30, 10);

console.log('kim.sum() -', kim.sum());
console.log('lee.sum() -', lee.sum());