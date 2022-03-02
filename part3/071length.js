// 문자열 길이 구하기 (length)

// 문자열.length

const arr = ["short", "long sentence, it is not appropriate"];

arr.forEach((str) => {
  if (str.length < 10) console.log(str);
}); // short
/*
arr변수에 forEach 함수로 순환하여 내부 요소에 접근한다. 이때 길이가 10보다 작은 경우에만 console.log로 값을 출력한다.
*/
