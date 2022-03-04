// Node.js의 모듈 이해하기

/**
 * 관련된 코드들끼리 나누고 따로 묶어놓는 블럭 단위를 모듈이라 한다.
 * 원래 JavaScript에는 모듈이란 개념이 분명하게 존재하지 않았다.
 * 그래서 자바스크립트 코드를 모듈화하기 위해 나온 것이 CommonJs와 AMD이다.
 * 이들은 자바스크립트 코드를 모듈로 만드는 합의된 일련의 표준명세서이다.
 * Node.js는 CommonJs의 모듈 명세를 따라 모듈화를 지원한다.
 * 즉, CommonJs와 같이 모듈을 선언할 때 module.exports를 사용하고, 모듈을 로딩할 때 require을 사용한다.
 */

function moduleTest(x, y) {
  return x + y;
}

moduleTest.exports = moduleTest;
