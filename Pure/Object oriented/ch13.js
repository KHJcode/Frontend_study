const Tom = { name: 'Tom', score1: 50, score2: 40, };
const Jun = { name: 'Jun', score1: 30, score2: 40, };

function sum (name) {
  console.log(name);
  return this.score1 + this.score2;
}

console.log('sum.call(Tom):', sum.call(Tom, Tom.name)); // sum 함수가 내부적으로 사용할 this의 값을 Tom 으로 지정하며 실행
console.log('sum.call(Jun):', sum.call(Jun, Jun.name)); // 두 번째 인자부터는 파라미터 전달

const Amy = { name: 'Amy', score1: 40, score2: 25, };

const newSum = sum.bind(Amy, Amy.name); // Amy 가 this 에 바인딩된 새로운 함수를 할당
console.log('newSum():', newSum());
