// 함수 호이스팅

hello();
function hello() {
  console.log("안녕하세요"); // 안녕하세요
}

hello2();
var hello2 = function () {
  console.log("안녕하세요"); // TypeError - hello2 변수가 hoisting 은 이루어졌지만 undefined 가 할당됨. undefined 는 호출할 수 없기 때문에 TypeError 발생.
}; // hoisting이 이루어지지 않았다면 ReferenceError로 hello2가 선언되지 않았다는 에러가 나와야 한다.

/* 호이스팅은 자바스크립트의 코드를 해석하고 실행하는 방식 때문에 나타난다. 자바스크립트는 코드를 해석하는 단계와 실행하는 단계로 나뉘고,
해석하는 단계에서 선언 문장을 초기화하면서 스코프를 형성하고 실행하는 단계에서 값을 할당하거나 계산을 하는 행위를 한다.
두 번째 코드를 예로 들면, 해석 단계에서 hello2 변수를 선언하는 문장이 먼저 초기화를 하여 스코프에 hello2라는 이름에 undefined라는 값을 할당했다가
실행 단계에서 hello2()를 호출하는 것이다. */
