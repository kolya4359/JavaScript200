# 파일 업로드 패키지에 필요한 외부 패키지

1. npm install express@4.16.4 --save

- Express는 웹 사이트(서버-클라이언트)와 HTTP API 개발에 적합한 웹 프레임워크로, 개발 시 필요한 메소드와 미들웨어를 제공한다.

2. npm install multer@1.4.1 --save

- 웹에서 서버로 API를 호출할 때 사용되는 파일 업로드 모듈이다. 구현은 Node.js 서버 미들웨어에 적용되며, multipart/form-data 폼으로 전달될 때 작동된다.

3. npm install cors@2.8.5 --save

- CORS는 express 프레임워크 미들웨어에 적용되는 모듈이다. CORS(Cross Origin Resource Sharing) 이란, 다른 도메인으로 리소스 전송을 요청하는 경우  
  cross-origin HTTP 요청이라고 부른다. 예를 들어, http://localhost:8080의 HTML 페이지가 http://local.javascript.com 서버로 자원을 요청하는 것을 의미한다.  
  이런 경우 브라우저는 보안에 의해 cross-origin HTTP 요청을 제한하고 있다. 따라서 클라이언트에서 서버로 API나 자원을 요청할 때, 동일한 도메인으로 HTTP 요청해야 한다.  
  또는 CORS 모듈을 추가하여 cross-origin HTTP 요청을 허용하는 방법도 있다.

# 파일 업로드 서버를 구성하는데 필요한 API 3가지

1. GET/ : 웸 페이지 index.html을 전달하는 API
2. POST/upload : 파일 업로드 API
3. GET/file_list : 파일 리스트 API

# Express 미들웨어

미들웨어는 HTTP 요청/응답하는 단계에서 중간에 request와 response 객체를 받아 특정 로직 또는 모듈을 실행한다. 이러한 미들웨어를 계속 추가 정의하면 체인처럼  
이어지고, 선언된 순서대로 미들웨어들이 실행된다. 미들웨어 기능을 활용하면 HTTP 요청/응답을 받는 라우터로 객체를 전달하기 전에, 또는 체인의 다음 미들웨어로 넘기기 전에  
request, response 객체를 중간에 수정할 수 있다. 그리고 특정 경우에 다음 체인의 미들웨어로 계속 넘기지 않고 중간에 응답을 종료시키기도 한다.
