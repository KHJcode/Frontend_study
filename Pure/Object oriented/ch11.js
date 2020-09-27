const superObj = { superOfValue: 'This is super!', };
const subObj = Object.create(superObj); // superObj 를 부모로 하는 새로운 객체 생성.

console.log('subObj:', subObj);
console.log('subObj.superOfValue:', subObj.superOfValue);
