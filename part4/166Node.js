// Node.js 예외 처리하기

/**
 * Node.js에서 에러를 처리하는 방법 두가지
 * 1. 비동기(async) 모듈 또는 함수의 callback 에서 첫 번째 매개변수로 에러 정보를 반환한다.
 * 이에 따라 비동기 모듈 또는 함수를 호출할 때에는 먼저 첫 번째 매개변수인 에러 정보를 우선적으로 확인해야 한다.
 * 에러 정보가 빈 값인 것을 확인한 이후 다음 작업을 수행하는 것을 권장한다.
 * 2. try-catch, throw
 * 자바스크립트 예외 처리와 동일하게 처리한다. 다만 주의해야 할 점은 첫 번째 방법에서 활용한 비동기 패턴에
 * try-catch, throw를 적용하는 것은 잘못된 방법이다. 무조건 비동기 함수의 에러 처리는 callback 함수를 활용해야 한다.
 * 반대로 callback 함수로 처리하지 않는 그 외 패턴(동기 -sync 패턴 등)에 대해서는 try-catch, throw를 적용하여 에러를 처리한다.
 */

"use strict";

const cbFunc = (err, result) => {
  if (err && err instanceof Error) return console.error(err.message); // err 이면서 Error 객체일 경우
  if (err) return console.error(err); // err 인데 Error 객체가 아닐 경우

  console.log("에러를 반환하지 않습니다.", result);
};

const asyncFunction = (isTrue, callback) => {
  /**
   * 자바스크립트 Error 객체처럼 사용할 수 있는 Node.js Core API Error 모듈이 있다.
   * new Error를 통해 객체를 생서앟여 변수 err에 대입한다. 여기서 Error 객체 생성 시 대입된 'This is error!!' 문자열은
   * Error 객체의 message 속성으로 값이 할당된다.
   */
  const err = new Error("This is error!!");

  if (isTrue) return callback(null, isTrue);
  else return callback(err);
};

asyncFunction(true, cbFunc);
asyncFunction(false, cbFunc);

const fs = require("fs");

try {
  /**
   * fs.readdirSync는 파일 시스템(fs)에서 동기 패턴으로 실행되는 함수이다. 따라서 별도의 callback 함수 없이 순서대로 실행된다.
   * 결과값이 바로 fileList 변수에 대입되고, 그 다음 줄에서 파일 정보들을 콘솔 출력한다.
   */
  const fileList = fs.readdirSync("/undefined/");
  fileList.forEach((f) => console.log(f));
} catch (err) {
  if (err) console.error(err);
}
