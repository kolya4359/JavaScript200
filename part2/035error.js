// 예외 처리

// throw문은 개발자가 고의로 에러를 발생시켜 예외 상황을 알리는 역할. 에러가 발생하면 프로그램이 무조건 종료된다.
function checkNumber(val) {
  if (typeof val !== "number") throw "유효하지 않은 값입니다.";
  console.log("숫자형 값으로 확인되었습니다.");
}

checkNumber(100);
checkNumber("Wrong type");
console.log("완료");

// try-catch-finally문 : try 블록 안에서 발생된 에러를 잡고, catch 블록으로 제어권을 넘겨 프로그램 종료 없이 에러를 확인 가능. finally 블록은 에러 발생 여부와 상관없이 실행.
function checkNumber(val) {
  if (typeof val !== "number") throw "유효하지 않은 값입니다.";
  console.log("숫자형 값으로 확인되었습니다.");
}

try {
  checkNumber(100);
  checkNumber("Wrong type");
} catch (e) {
  console.log(`에러가 발생했습니다 >>> ${e}`);
} finally {
  console.log("완료");
}
