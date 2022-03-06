// request로 간편하게 api 요청하기

/**
 * request 패키지를 이용하면 API 요청을 간단하게 할 수 있다.
 * npm install request@2.88.0
 */

const request = require("request");

const url = "http://uinames.com/api";
const json = true;
const qs = { region: "korea", amount: 3 };

request.get({ url, json, qs }, (err, res, result) => {
  if (err) return console.log("err", err);
  if (res && res.statusCode >= 400) return console.log(res.statusCode);

  result.forEach((person) => {
    console.log(
      `${person.name}${person.surname} 님의 성별은 ${person.gender}입니다.`
    );
  });
});
