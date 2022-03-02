// 특정 위치의 문자 반환하기 (charAt)

const str =
  "Good afternoon, Good evening, and Good night! " + " - The Truman Show, 1998";

console.log(str.charAt(0)); // G - 0번째 문자
console.log(str.charAt(5)); // a - 5번째 문자
console.log(str.charAt(14)); // , - 14번째 문자
console.log(str.length); // 69 - 문자열의 길이
console.log(str.charAt(500)); // 문자열의 길이보다 큰 값을 대입하면 빈 값을 반환한다.
