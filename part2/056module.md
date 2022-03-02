# 모듈 시스템 이해하기

ES6의 모듈은 자바스크립트 코드를 담고 있는 하나의 파일이다.  
ES6의 모듈로 정의된 파일들은 실행하는 방법에 따라 두 가지로 분류할 수 있다.

- 런타임 로딩(Runtime Loading) : 런타임 로딩은 의존 관계가 형성된 모듈들을 애플리케이션이 구동 시점에 비동기 HTTP 요청으로 불러오고 실행된다.  
  이때 모듈 로더가 필요한데 system.js 나 require.js 를 이용할 수 있다.

  - system.js는 다양한 모듈 형식을 지원하는 모듈 로더이다. ES6 모듈 형식 외에 require.js, CommonJS 등 다양한 포맷을 지원한다.  
    뿐만 아니라 system.js 자체 포맷 또한 제공하고 있다.

- 번들링(Bundling) : 번들링은 의존 관계가 형성된 모듈들을 하나의 파일로 묶어 준다. 그리고 애플리케이션이 구동할 때 묶여진 이 파일을 로드한다. 번들링은 개발 시점에 이루어지게 되고 브라우저에서 이루어지지 않고 대체로 node.js 환경에서 이루어지게 된다. 대표적인 모듈 번들러로는 웹팩(Webpack)이 있다.
  - 웹팩은 모듈 번들러로 자바스크립트 코드 외에 CSS, 이미지, 폰트 등 다양한 자원들을 모듈화시켜 의존관계 그래프를 형성하여 병합된 파일들을 만들 수 있다. node.js 플랫폼에서 동작하는 애플리케이션이고 다양한 플러그인들을 제공하고 있다.