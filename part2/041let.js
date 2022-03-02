// let 변수

if (true) {
  var functionScopeValue = "global";
  let blockScopeValue = "local";
}
console.log(functionScopeValue); // global
console.log(blockScopeValue); // ReferenceError

let value = "바깥값";
if (true) {
  console.log(value); // ReferenceError
  let value = "안쪽값";
}

/* 만약 let value = "안쪽값"; 이 없다면 전역에서 정의된 value를 참조하여 "바깥값"이 출력된다. 하지만 if 블록 안에서 let 으로 변수를 정의하였기 때문에
value는 if 블록문 안에 위쪽으로 호이스팅되어 실제 let으로 선언이 이루어지기 전까지 일시적으로 접근이 안 되는 영역을 만들고 그 안에서 접근을 하게 되면 에러가 발생 */
