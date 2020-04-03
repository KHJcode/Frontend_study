function Person(name, first, second, third) {
    this.name = name,
    this.first = first,
    this.second = second,
    this.third = third
}

// prototype 을 이용하면 new 를 이용해 새로운 객체를 찍어낼 때 마다 같은 동작을 하는 
// 객체의 속성 값 (여기서는 함수) 를 생성하는 것이 비효율적으로 반복되는 것을 막을 수 있다.

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