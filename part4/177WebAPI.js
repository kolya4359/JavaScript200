// 웹 API 작성하기

"use strict";

const http = require("http");
// querystring 내장 모듈은 URL쿼리(query) 문자열을 분석하고 다른 형식을 지정 변환하는 함수들을 제공한다.
// 일반적으로 JavaScript에서 간편하게 활용할 수 있는 JSON 형식으로 변환한다.
const qs = require("querystring");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "POST":
      let body = "";
      // data와 end 이벤트 등록
      // 각 'data' 이벤트는 Buffer 형식의 데이터로 전달되는데, 문자열과 덧셈 연산을 하면 Buffer 데이터가
      // 문자형으로 자료형 변환되어 문자열 데이터를 받을 수 있다.
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        // 'data' 이벤트로 수집된 문자열 body 변수를 qs.parse 함수를 통해 객체 형식으로 파싱한다.
        const obj = qs.parse(body);
        res.writeHead(200);
        res.end(JSON.stringify(obj));
      });
      req.on("error", (err) => {
        console.error(err.stack);
      });
      break;
    default:
      res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/**
 * 웹 브라우저에 주소를 호출하는 방법은 GET 메소드 API만 가능하다. POST 메소드로 작성된 API를 확인하려면
 * 별도로 앱을 다운받아 확인할 수 있다. Postman 프로그램을 사용하면 가능하다.
 */
