// 모듈 - 네임스페이스 패턴

/* 
네임스페이스란 코드를 그룹화하고 이름 충돌을 방지하게 도와준다. 자바스크립트에서는 네임스페이스를 직접적으로 지원하지 않아서
함수를 정의함과 동시에 실행하는 즉각 호출 패턴을 통하여 유사하게 구현할 수 있다.
이렇게 하는 이유는 기본적으로 변수와 함수를 선언하게 되면 전역으로 정의되어 다른 라이브러리나 타인의 코드에서
정의된 이름들과 충돌이 날 수 있기 때문이다.
*/
// 즉각 호출 패턴인 (function(){코드})();를 통해 namespaceA의 변수에 함수에서 반환된 객체를 할당한다.
var namespaceA = (function () {
  var privateVariable = "비공개 변수"; // 함수 안에 선언된 변수는 함수 내부에서만 접근이 가능하기 때문에 비공개 영역이 된다.
  // 반환되는 객체는 namespaceA에 할당되고, 외부에서 접근이 가능하기 때문에 해당 객체의 속성과 메소드들은 공개 API가 된다.
  return {
    publicApi: function () {
      console.log(privateVariable + "를 접근할 수 있습니다.");
    },
  };
})();

namespaceA.publicApi();

/*
namespaceA 자체는 전역으로 등록되기 때문에 여전히 이름 충돌이 발생할 수 있다. 그리고 즉각 호출 패턴을 통해 정의된 다른 모듈을 사용하는 것 또한
전역을 통해 가져오게 된다. 이러한 문제점을 해결하기 위해 ES6 이전에는 RequireJS를 통하여 모듈을 정의하였다.
*/
