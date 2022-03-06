// Http 서버 띄우기

/**
 * Node.js http 내장 모듈은 HTTP 서버와 클라이언트를 구성하는 함수를 제공한다. 보통 웹서버를 구성할 때는 프레임워크를 사용하여
 * 간단하고 빠르게 웹 애플리케이션을 만들 수 있다. 그러나 Part4에서는 Node.js 코어 모듈만 활용하여 HTTP 요청/응답 통신이
 * 어떻게 이루어지는지 살펴본다. HTTP 요청/응답을 위해서는 HTTP 서버를 만들어야 한다. 어떤 요청이나 응답도 서버가 만들어진 후 가능하다.
 */

const http = require("http");

// 사용하고자 하는 호스트명과 포트번호
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  /**
   * response 객체의 setHeader 함수에 헤더 정보를 지정한다. 이 헤더 정보를 통해 서버가 클라이언트로 응답하는 자원 종류를 지정한다.
   * Content-Type는 클라이언트로 전달되는 자원의 타입(종류)를 말한다. 그리고 여기서 지정된 타입은 'text/plain', 텍스트 파일이다.
   */
  res.setHeader("Content-Type", "text/plain");
  // response 객체의 end 함수는 지정된 모든 응답 헤더와 본문이 전송되었음을 서버에 알린다. 해당 서버는 이 메시지를 기준으로 응답 완료로 간주한디.
  // 따라서 response.end 함수는 반드시 각 응답에서 호출되어야 한다.
  res.end("Hello! Node.js HTTP Server");
});

// listen 함수로 서버를 연결한다.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/**
 * HTTP 서버와 클라이언트 간 통신은 메시지를 통해 주고 받는다. 이를 HTTP 메시지라고 부르는데, 메시지는 request(요청)와 response(응답)
 * 두 가지 종류로 나뉘며 비슷한 구조를 지닌다. 메시지를 통해 주고받는 정보는 총 세가지인다. 요청 또는 응답에 대한 상태 정보(ex, url, statuseCode),
 * HTTP 헤더(header), HTTP 메시지본문(body) 정보가 메시지에 담긴다.
 */
