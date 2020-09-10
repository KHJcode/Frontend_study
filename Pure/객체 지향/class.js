class Person {
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first + this.second;
    }
}

class PersonPlus extends Person { // extends = 확장 ( Person 의 요소들을 상속 받는다. )
    constructor(name, first, second, third){
        super(name, first, second); // 부모 class 의 생성자 (constructor) 를 호출한다. 필요한 인자를 넘겨줘야 한다
        this.third = third;
    }
    sum(){
        return super.sum()+this.third; // super. 은 부모 클래스의 속성 값에 접근하는 것이다.
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim.sum() : ', kim.sum());
console.log('kim.avg() : ', kim.avg());


