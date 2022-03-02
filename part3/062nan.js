// NaN 값 확인하기 (Number.isNaN)

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN("Is it Number?")); // false
console.log(Number.isNaN(0)); // flase
console.log(Number.isNaN(null)); // false

/*
Number 객체의 isNaN 메소드는 NaN을 구별한다. NaN 이면 true를 반환하고, NaN이 아니면 false를 반환한다.
여기서 NaN이란 전역 객체의 속성으로 Not a Number(숫자가 아님)의 줄임말이다.
*/

console.log(Number.isNaN(-1)); // false
console.log(Number.isNaN(0 / 0)); // true
console.log(Number.isNaN(new Date())); // false
console.log(Number.isNaN(new Date().toString)); // false
console.log(Number.isNaN("Infinity")); // false

// verifyNumber 를 통해 NaN 여부를 검증하여 모든 값이 정상 숫자임을 확인 한 후 안전하게 산술 연산하기

function verifyNumber(n) {
  if (!n || Number.isNaN(n)) return 0;
  return n;
}
const num1 = verifyNumber(15); // 15
const num2 = verifyNumber(undefined); // 0
const num3 = verifyNumber(null); // 0
const num4 = verifyNumber(NaN); // 0
console.log(num1 + num2 + num3 + num4); // 15
