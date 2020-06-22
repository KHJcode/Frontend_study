function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function(){
    return this.first+this.second;
}

function PersonPlus(name, first, second, third){
    Person.call(this, name, first, second); 
    // class 의 super(name, first, second);  와 같은 일을 함.
    this.third = third;
}

PersonPlus.prototype.avg = function(){
    return (this.first+this.second+this.third)/3;
}

PersonPlus.prototype.__proto__ = Person.prototype; // 더 효율적이나 비표준이다.
//PersonPlus.prototype = Object.create(Person.prototype);
//PersonPlus.prototype.constructor = PersonPlus; 

var kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim.sum() : ', kim.sum());
console.log('kim.avg() : ', kim.avg());
console.log('kim.constructor', kim.constructor);