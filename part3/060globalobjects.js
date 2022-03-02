// 표준 내장 객체

const str = new String("자바스크립트");
const num = new Number(200);
const bool = new Boolean(true);
const date = new Date();
const map = new Map();
const set = new Set();

console.log(Math.PI);
console.log(Date.parse("2019-01-01"));
console.log(JSON.parse("{}"));

// 내장 객체와 원시 자료형의 차이점

const str1 = "자바스크립트 200제";
const str2 = new String("자바스크립트 200제");

console.log(typeof str1); // string
console.log(typeof str2); // object

console.log(str1 === "자바스크립트 200제"); // true
console.log(str2 === new String("자바스크립트 200제")); // false - String 객체로 대입된 str2는 값이 아닌 주소값을 참조하기 때문에 일치하지 않아 false를 반환.

// valueOf - String 내장 객체에 정의된 메소드로, 객체의 원시형 값, 즉 문자열을 반환하는 메소드다.
// 이를 통해 원시 자료형인 str1도 String 내장 객체가 지원하는 메소드를 사용할 수 있다는 것을 알 수 있다.
console.log(str1.valueOf()); // 자바스크립트 200제
console.log(str2.valueOf()); // 자바스크립트 200제

/*
자바스크립트에서는 원시 자료형이 각 성격에 맞게 표준 내장 객체로 자동으로 래핑된다.
즉, 문자열로 작성된 값이 String 객체로 래핑된다는 의미이다. 자료형을 확인하면 확연하게 다른 것으로 구분되지만,
원시 자료형 값이지만 표준 내장 객체로 래핑됨에 따라 내장 객체에서 제공하는 메소드나 속성을 가져다 사용할 수 있다.
*/

/*
자바스크립트 표준 내장 객체의 종류
Object: 다른 표준 내장 객체의 기본이 되는 일반 객체.
Number: 숫자형을 감싼 객체. 숫자형과 관련된 함수와 속성을 갖고 있다.
String: 문자형을 감싼 객체. 문자형을 조작하거나 특정 문자열을 찾고 추출하는 등의 메소드와 속성을 활용할 수 있다.
Array: 모든 배열은 Array.prototype을 상속받는다. Array 객체는 리스트처럼 배열 역할을 지니며, 배열 요소를 추가/삭제하거나, 배열 자체를 순회/변형하는 다양한 메소드와 속성을 지니고 있다.
Math: 수리 연산을 하기 위한 속성과 메소드를 지닌 내장 객체. 다른 내장 객체와 달리 Math 객체는 new를 통해 인스턴스를 생성하지 않는다. static으로 정의된 속성과 메소드를 직접 호출해야 한다.
Date: 시간에 관련된 객체. 현재 시간을 비롯하여, 국제 표준시에 따른 시간 변환 계산도 할 수 있다.
JSON: JavaScript Object Notation(JSON) 을 의미. 이를 다른 자료형으로 변환하거나 다시 JSON으로 변환하는 등의 메소드를 제공하고 있다.
RegExp: 정규표현식은 특정 문자열 처리를 위해 사용하는 문자열 패턴 정의를 의미한다. 정규표현식을 적용 가능한 문자열 탐색, 비교, 대체 등의 문자열 처리 메소드들을 지원한다.
Map: ES6부터 표준으로 추가된 Map 객체는 키 : 값 데이터 구조를 지닌 데이터 집합체(Collection)이다. 키의 중복성을 허용하지 않으며 관련된 속성, 메소드들을 갖고 있다.
또한, Iterator를 통해 Map의 데이터를 순회한다는 특징이 있다.
Set: ES6부터 표준으로 추가된 객체형으로, 오직 값으로 이루어진 데이터 집합체이다. 그래서 언뜻 배열과 비슷하게 느껴질 수도 있으나 내부 속성, 메소드의 구성이 다르고,
또한, Iterator로 순회된다는 점, 값의 중복성을 허용하지 않는 차이점이 있다.
*/
