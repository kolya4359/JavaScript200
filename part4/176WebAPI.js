// 웹 API 작성하기

/**
 * 웹 API (Application Programming Interface)는 다른 애플리케이션들이 연결되어 동일한 데이터를 주고받을 수 있는 인터페이스이다.
 * 기본적으로 API는 요청을 받고, 원하는 것을 응답해주는 역할을 수행한다. API는 요청과 응답해주는 서비스를 위해 제공되는 창구,
 * 즉 인터페이스라고 이해하면 된다. 다시 말해, API를 통해 요청/응답을 주고받을 수 있다.
 *
 * 예를 들어, 쇼핑 사이트 브라우저에서 주문서를 작성해서 주문 완료 버튼을 누르면, 주문서에 작성된 정보를 갖고 웹 API로 요청한다.
 * 그리고 이 웹 API를 통해 서버로 주문서 정보들이 전달되어 주문과 관련된 비즈니스 로직이 수행된다.
 */

"use strict";

const http = require("http");
// url 모듈은 URL 문자열 또는 객체형 값을 유용하게 다룰 수 있도록 도와주는 유틸리티 성격의 모듈이다.
// URL 모듈을 활용하면 문자열 url도 파싱하여 원하는 구조 형태나 부분을 쉽게 가져올 수 있다.
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      if (req.url === "/") {
        res.setHeader("Content-Type", "text/plain");
        res.writeHead(200);
        res.end("Hello! Node.js HTTP Server");
      } else if (req.url.substring(0, 5) === "/data") {
        const queryParams = url.parse(req.url, true).query;
        /**
         * url 모듈의 parse 함수는 url 문자열을 넣으면 url 객체를 반환한다. url 객체를 살펴보면 아래와 같다.
         * url.parse 함수에 두 번째 인자는 필수는 아니지만, true를 넣으면 Url 객체의 query를 json 형태로 받을 수 있다.
         */

        res.setHeader("Content-Type", "text/html");
        // text/html은 MIME 콘텐츠 형식 또는 인터넷 미디어(html) 형식의 텍스트를 의미한다.
        res.writeHead(200);
        res.write("<html><head><title>JavaScript 200제</title></head>");

        for (let key in queryParams) {
          res.write(`<h1>${key}</h1>`);
          res.write(`<h2>${queryParams[key]}</h2>`);
        }

        res.end("</body></html>");
      }
      break;
    default:
      res.end();
  }
});

server.listen(prot, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/**
 * url 객체
 * Url {
 * ptotocol: null,
 * slashes: null,
 * auth: null,
 * host: null,
 * port: null,
 * hostname: null,
 * hash: null,
 * search: '?qs1=1&qs2=2',
 * query: {qs1: '1', qs2: '2'},
 * pathname: '/data',
 * path: '/data?qs1=1&qs2=2',
 * href: '/data?qs1=1&qs2=2' }
 */
