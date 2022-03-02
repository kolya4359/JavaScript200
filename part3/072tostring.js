// 문자열로 변환하기(toString)

/* 
자바스크립트의 모든 객체는 Object를 상속받기 때문에, 다른 모든 객체는  prototype을 통해 Object의 내장 메소드 toString()에
접근하고 재정의(Override)한다. 이는 Object 객체의 toString()을 상속받은 것과 다르다.
*/

const num = 5;
const bool = true;
const str = "문자열 값";
const arr = [1, 2, 3];
const obj = { a: 15 };

console.log(num.toString()); // 5
console.log(bool.toString()); // true
console.log(str.toString()); // 문자열 값
console.log(arr.toString()); // 1,2,3
console.log(obj.toString()); // [object Object]

// 변수 중에서 num 변수의 __proto__ 를 통해 toString 메소드를 직접 재정의한다.
num.__proto__.toString = () => {
  return "toString 덮어쓰기";
};
console.log(num.toString()); // toString 덮어쓰기
