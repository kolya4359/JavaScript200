// arguments 객체

function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(arguments instanceof Array); // false - 배열이 아님.
  return total;
}

var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function testArg() {
  var newArr = Array.prototype.slice.call(arguments);
  // arguments 객체를 배열로 바꾸기 위해 배열의 프로토타입에 정의된 slice 메소드를 호울.
  // 이렇게 하면 grgumenst 객체의 요소들을 복사하는 새로운 배열이 생성.
  console.log(newArr); // ["a", "b"]
  console.log(newArr.indexOf("b")); // 1 - 배열이기 때문에 indexOf 메소드를 사용하여 문자열 b의 인덱스를 반환
  console.log(arguments.indexOf("b")); // 배열이 아니기 때문에 error 발생.
}

testArg("a", "b");
