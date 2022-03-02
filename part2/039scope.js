// 스코프

var a = 10; // 전역 스코프
console.log(a); // 10

function print() {
  var b = 20; // 함수 스코프
  if (true) {
    var c = 30; // if문 안에서 선언되었지만 var 키워드를 사용하면 함수 내에서 사용 가능.
  }
  console.log(c); // 30
}

print();
console.log(b); // error

// 렉시컬(Lexical)스코프와 다이나믹(Dynamic)스코프가 있다.
// 렉시컬 스코프는 코드를 작성하는 시점에 스코프가 결정되어진다고 해서 정적 스코프라고 부른다.
// 자바스크립트는 대표적인 렉시컬 스코프이다.

var a = "global";

function print1() {
  console.log(a);
}

function print2() {
  var a = "local";
  print1();
}

print1(); // global
print2(); // global - 자바스크립트는 렉시컬 스코프이기 때문에 print1()이 작성될 때 이미 전역a를 참조하고 있기 때문에 global이 출력.
