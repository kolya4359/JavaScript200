Express 프로젝트에서 가장 중요한 파일은 app.js이다. app.js를 통해 서버를 실행하고, 프로젝트 내 필요한 미들웨어(Middleware)와 클라이언트(Client)를 연동한다.

# 패키지

- http-errors: express-generator 로 자동 설치된 패키지로, HTTP 상태 코드(Status Code)를 함수로 간편하게 생성하는 패키지이다.  
  특히 이 모듈은 웹 서버의 에러 처리 시 사용되기 때문에, 4xx 와 5xx 번대 상태 코드만 처리한다.

- cookie-parser : req.cookies를 JSON으로 파싱하거나 객체로 값을 채울 수 있다. 또한 secret를 전달해서 쿠키를 비밀 문자열로 이루어진 쿠키값을 파싱하기도 한다.

- morgan : 웹의 HTTP 요청문을 로거(logger)로 로그를 남기는 로깅 모듈이다. 원하는 포맷이나 HTTP options 중 원하는 속성을 추가로 로깅(logging)할 수 있다.

- 라우팅(routing) : 라우팅을 처리하는 파일을 로딩한다. 라우틴이란, "엔드 포인트(URI)가 정의되고 클라이언트 요청에 대해 응답하는 방식"을 의미한다.  
  routes 폴더 안에 있는 api.js 파일을 로드한다.

# 미들웨어

- app.use(logger('dev')); : 미들웨어 함수(middleware function)에 모듈을 추가한다. app.use(logger('dev'))는 morgan모듈을 로드한  
  logger 변수를 미들웨어 함수에 추가한다. 이처럼 모듈을 추가하는 미들웨어를 두고 써드파티 미들웨어라고 한다.

- app.use(express.json()) : Express에 내장된 body-parser 모듈을 로드하고, body-parser 모듈의 json() 함수를 가져온다.  
  이를 미들웨어에 대입함으로써, 요청할 때 같이 전송된 데이터를 request 객체의 body에 넣어 반환해준다.

- app.use(express.urlencoded({extended: false})) : Express에 내장된 body-parser 모듈 함수를 호출한다.  
  urlencoded함수는 Content-Type 헤더 타입이 이와 일치하는지 조사하고, urlencoded인 본문만 구문 분석하는 미들웨어이다.  
  extended를 false로 설정하여 url에 있는 인코딩 데이터를 구문 분석하지 않도록 설정한다.

- app.use(express.static(path.join(\_\_dirname, "public"))); : 웹 페이지 구성에 이미지, CSS 파일, 자바스크립트 파일과 같은 정적 파일들을 활용한다.  
  Express에서 정적 파일을 기본 제공하도록, 파일들이 위치한 public 디렉터리 경로를 express.static 함수로 지정하고 미들웨어에 추가한다.

- app.use("/api/game", apiRouter); : 라우팅을 처리하는 api.js 파일의 코드를 미들웨어로 추가한다. 라우팅 레벨의 미들웨어를 추가할 때 첫 번째  
  매개변수로 문자열을 대입하면, 이는 클라이언트에서 요청하는 경로가 된다. 예를 들어, 클라이언트가 http://{서버주소}/api/game 으로 요청하면 apiRouter 함수가 실행된다.

- app.use 로 추가된 미들웨어는 모든 요청마다 실행된다. 특정 경로가 지정되지 않는 한, 콜백 함수도 항상 실행되는 코드이다.  
  다만 Experss에 미들웨어들은 추가된 순서대로 실행되기 때문에, 만일 경로가 일치하면 apiRouter가 먼저 실행되어 응답을 종료한다. 이 경우에는 뒷 미들웨어는 실행되지 않는다.

# API 작성에 필요한 리스트

- 전체 게임 리스트 확인하기
- 게임 시작 및 자리수 선정
- 특정 게임 정보 확인하기
- 특정 게임 삭제하기
- 게임 결과 확인하기

이렇게 정의한 4개의 API를 baseballgame/routes 폴더 아래 api.js 파일에 작성한다.

# 비즈니스 로직 작성

비즈니스 로직(Business Logic) 이란, 실제로 데이터가 어떻게 생성/저장/변경되는지, 처리 흐름 및 비즈니스 규칙들을 정의해 놓는 것을 의미한다.  
반드시 지켜야하는 순서, 즉 절차(Procedure)를 정의하고, 로직이 정상적으로 수행되도록 필요한 규칙(Rule)을 정의한다.  
일반적으로 비즈니스 로직은 데이터베이스 또는 입출력에 관한 코드와 밀접한 연관이 있다.  
services/index.js 에 작성.
