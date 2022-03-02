// 스코프 체인

/* 스코프 체인을 이해하기 위해서는 실행 컨텍스트(Execution Context)와 렉시컬 환경(Lexical Environment)에 대해 알아야 한다.
실행 컨텍스트는 코드가 실행되기 위해 필요한 정보를 가지고 있다. 이 실행 컨텍스트는 실행 가능한 코드가 실행될 때 생성된다.
대표적인 실행 가능한 코드로는 전역 코드와 함수코드가 있다. 그 외에 eval 과 모듈 코드도 있다.

처음에는 전역 코드가 먼저 실행된다. 이때 전역 컨텍스트를 만들고 전역 코드를 순차적으로 평가한다. 그러다 함수가 호출문을 만나면
새로운 실행 컨텍스트가 만들어지면서 해당 함수 실행부의 코드를 순차적으로 평가한다. 이때 스택(stack)을 이용해 실행 컨텍스트를 관리하게 되는데,
새로운 실행 컨텍스트가 생성되면 스택에 쌓고 실행 중인 코드가 종료되면 해당 실행 컨텍스트를 스택에서 제거한다. */

var person = "harin";

function print() {
  var person2 = "jay";

  function innerPrint() {
    console.log(person);
    console.log(person2);
  }

  innerPrint();

  console.log("print finished");
}

print();
console.log("finished");
