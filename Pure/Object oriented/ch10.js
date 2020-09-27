const superObj = { superOfValue: 'super!', };
const subObj = {};

subObj.__proto__ = superObj; // 부모를 지정 ( 표준 방법 X )

console.log('subObj:', subObj);
console.log('subObj.superOfValue:', subObj.superOfValue);
