var superObj = {superVal:'super'};
//var subObj = {subVal:'sub'};
//subObj.__proto__ = superObj;// __proto__ 를 이용해 프로토타입 링크를 걸어서 
                            //subObj 가 superObj 의 자식이란 것을 표시함. 즉, 상속과 같다.
var subObj = Object.create(superObj); // 더 권장되는 방법
subObj.subVal = 'sub';
debugger;
console.log(subObj.subVal) ;
console.log(subObj.superVal); // 부모 객체에서 상속받은 속성 값을 출력.
subObj.superVal = 'sub'; // 부모 객체에서 상속받은 속성 값을 변경함.
console.log(superObj.superVal); // 부모 객체의 속성 값까지 변경되지는 않는다.

var kim = {
    name:'kim',
    first: 10, second:20,
    sum:function(){return this.first+this.second}
}

var lee = Object.create(kim);
lee.name = 'lee',
lee.first = 10,
lee.second = 10,
lee.avg = function(){
    return (this.first+this.second)/2;
};
//var lee = {
    //name:'lee',
    //first:10,second:10,
    //avg:function(){return (this.first+this.second)/2}
//}
//lee.__proto__ = kim;
console.log('lee.sum() :',lee.sum());
console.log('lee.avg() :',lee.avg());