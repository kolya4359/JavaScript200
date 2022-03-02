// 진수 변환하기 (toString)

// Number 객체의 toString 메소드는 값을 특정 진법으로 표현하여 문자형으로 반환한다.

const dec = 531;

const binByDex = dec.toString(2); // 2진수
const octByDex = dec.toString(8); // 8진수
const hexByDex = dec.toString(16); // 16진수

console.log(binByDex); // 1000010011
console.log(octByDex); // 1023
console.log(hexByDex); // 213
