var kim = {name: 'kim', first: 10, second:20};
var lee = {name: 'lee', first: 10, second:10};

function sum(prefix) {
    return prefix+(this.first+this.second);
}

// sum();
// 모든 함수는 call 이라는 메소드를 가지고 있다. JS 는 원래 함수의 구조는 객체이다.
// call 이라는 함수는 첫번째 인자로는 그 함수의 내부적으로 this가 지정될 객체를, 
// 두번째 인자부터는 함수의 파라미터로 제공된다.  
console.log('sum.call(kim)', sum.call(kim, '=> ')); 
console.log('sum.call(lee)', sum.call(lee, ': '));

var kimSum = sum.bind(kim, '-> '); // bind 는 call 과 비슷하게 
                                    // this가 지정될 객체를 선택하는 함수를 (새로 만든다.)
console.log('kimSum()', kimSum());
