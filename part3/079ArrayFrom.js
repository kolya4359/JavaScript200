// 배열 요소를 분할/변환하기(from)

// Array.from(배열로 변환될 값, 반환될 배열 내부 요소에 대한 callback 함수)

/*
Array 내장객체의 메소드 from은 도입된 문자열 값을 구분자 없이 분할한다.
그리고 분할된 문자는 배열 요소 각각에 대입되어, 결과값으로 배열을 반환한다.
*/

const str = "12345678";

/*
변수 str을 Array.from에 대입하여 호출한다. 호출한 결과값은 distributedArr에 다시 할당한다. Array.from에 문자열을 대입하면 구분자 없이 문자열을
하나씨 쪼개서 배열을 반환한다. '12345678' 문자열이 분할되어, 배열 ['1', '2', '3', ... , '8'] 이 distributedArr 변수에 대입된다.
*/
const distributedArr = Array.from(str);
console.log(distributedArr);
// [ '1', '2', '3', '4', '5', '6', '7', '8']

/*
Array.from의 두 번째 인자로 callback 함수를 넣으면 분할된 배열값의 내부 요소들이 하나씩 callback 함수로 전달된다.
전달된 요소들은 callback 함수에 따라 처리되고, 처리된 이후 최종 결과값으로 반환된다.
*/
const modifiedArr = Array.from(distributedArr, (el) => el * 2);
console.log(modifiedArr);
// [ 2, 4, 6, 8, 10, 12, 14, 16]
