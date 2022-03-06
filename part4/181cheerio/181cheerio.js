// cheerio로 크롤링하기

/**
 * 웹 사이트 정보를 탐색하는 방법으로 크롤링(Crawling) 또는 스크래핑(Scraping)이 있다.
 * 웹 브라우저에서 콘솔창을 열었던 것처럼 "개발자 도구"를 보면, 페이지의 모든 요소들을 DOM 트리로 확인할 수 있다.
 * 크롤링 또는 스크래핑은 가감없이 이러한 페이지 요소를 가져오고 탐색한다.
 * cheerio 패키지가 바로 크롤링 또는 스크래핑을 위한 모듈이다.
 *
 * cheerio는 웹 사이트 마크업 구문을 분석하고, 구조 탐색 또는 조작하기 위한 함수를 제공한다. 또한 jQuery 라이브러리에서 구현하는 하위선택자(Selector) 방식을
 * 적용하여, 필요없는 부분을 제외하고 원하는 정보만 가져올 수 있다.
 * npm install cheerio@1.0.0-rc.2
 */

const cheerio = require("cheerio");
const request = require("request");
const fs = require("qs");

fs.readFile("./example.html", (err, data) => {
  if (err) return console.log(err);

  const $ = cheerio.load(data);

  /**
   * cheerio로 정보를 탐색하기 위해 먼저 html 문서를 로드(load)해야 한다. fs.readFile로 가져온 HTML 정보를 cheerio.load 함수에 넣고
   * 함수에서 반환된 결과값을 $변수에 대입한다. cheerio.load 함수가 반환한 $ 변수는 jQuery의 $함수와 같다. load() 함수를 통해 HTML 문서를
   * 조작 가능한 DOM으로 파싱(Parsing)한다.
   */
  console.log($("#body", "#html").find("li").length);
  console.log($(".son", "#people").text());
});

request("https://ko.wikipedia.org/wiki/HTML", (err, res, html) => {
  if (err) return console.log(err);
  if (res && res.statusCode >= 400) return console.log(res.statusCode);

  const $ = cheerio.load(html);
  console.log($("div[class=toc]").children().find("a").text());
});

/**
 * $(selector, [context], [root]) : 원하는 선택자를 찾는 메소드이다. 이때 context와 root는 피수값은 아니다.
 * 값을 지정하려면 설정한 해당 context 스코프 또는 root 스코프에서 선택자를 찾는다.
 *
 * .find() : selector를 필터링하여, 일치하는 요소의 현재 세트에서 자손(Subset)을 가져온다.
 *
 * .text() : 일치하는 선택자 요소 집합의 텍스트 내용을 가져온다. 이는 선택된 요소뿐만 아니라 해당 요소 집합 내 자손을 포함한다.
 */
