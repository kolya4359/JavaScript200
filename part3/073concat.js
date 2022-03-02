// 두 개의 문자열 하나로 합치기(concat)

const str1 = "Good afternoon";
const str2 = ", Good evening";
const str3 = ", and Good night!";
const str4 = " - The Truman Show, 1998";
console.log(str1.concat(str2, str3, str4));
// Good afternoon, Good evening, and Good night! - The Truman Show, 1998

/*
+ 연산자를 사용해도 문자열을 합칠 수 있고, 실제로 더 많이 사용된다.
+ 연산자는 문자열과 다른 자료형을 하나의 문자열로 만들 수 있고, 성증상 더 빠르기 때문에 사용을 권장한다.
*/
