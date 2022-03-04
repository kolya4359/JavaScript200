// Node.js 내장 모듈 사용하기

/**
 * Node.js 개발 시 유용하게 사용할 수 있는 모듈들이 라이브러리로 내장되어 있다.
 * Node.js에서는 이를 두고 Node.js API라고 명칭하는데, 다르게는 코어 모듈 또는 내장 모듈이라고도 부른다.
 * const fs = require('fs');
 * require 함수를 사용해서 내장 모듈을 로드한다.
 * Node.js 코어에는 유틸리티 성격의 자바스크립트 코드로 구현된 lib 폴더가 있다.
 * Node.js는 require 함수에 ./없이 문자열 인자를 넣어 호출하면, Node.js 코어 lib 폴더에서 그와 이름이 일치하는 모듈을 찾는다.
 */

const util = require("util");

const name = "Tony";
const greeting = util.format("Hello %s", name); // Hello Tony
console.log(greeting);
