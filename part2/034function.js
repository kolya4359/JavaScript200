// 함수

// 함수 표현식 : 함수를 정의하는 동시에 greeting_expression 변수에 함수 리터럴을 할당.
var greeting_expression = function (name) {
  console.log("Hi, " + name);
};

// 함수 선언문 : greeting_declaration이라는 함수 이름을 선언.
function greeting_declaration(name) {
  console.log("Hi, " + name);
}

greeting_expression("Chloe");
greeting_declaration("Chloe");
