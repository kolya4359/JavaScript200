// 정규표현식으로 문자열 확인하기 (match)

/*
String 객체의 match 메소드는 정규 표현식에 맞는 부분을 검색해서 해당 값을 반환한다.
그리고 정규표현식에 맞는 값이 있는 경우 다음과 같은 문자열의 추가 정보와 함께 배열을 반환한다.

- 인자로 대입한 값과 일치하는 값
- index 속성 : 대응된 부분의 첫 번째로 해당되는 인덱스
- input 속성 : 원본 문자열

단, 정규 표현식에 g 플래그가 아닐 때에만 추가 정보가 반환된다.
*/

const str = "To lose your path is the way to find that path";

const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi;
const findRangeRegex = /([a-f])\w+/i;
const findAllRangeRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));

/* 결과
[ 'to',
index: 29,
input: 'To lose your path is the way to find that path', groups: undefined ]
[ 'To', 'to' ]
[ 'ath',
'a',
index: 14,
input: 'To lose your path is the way to find that path', groups: undefined ]
[ 'ath', 'ay', 'find', 'at', 'ath' ]
*/
