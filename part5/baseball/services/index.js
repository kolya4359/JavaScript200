"use strict";

const Baseball = require("./baseball.js");
// index.js 파일에 게임 비즈니스 로직이 대부분 존재하지만, 이는 처리 절차와 조건 및 예외 처리에 관한 내용이다.
// 그 외에 베이스볼 게임 연산이나 이력, 게임 결과 등 게임과 관련된 정보의 객체화는 baseball.js의 baseball 클래스에 작성되어 있다.
const model = require("../models");

const getGames = () => {
  const games = {};
  const data = model.readFile();
  // model.readFile() 을 통해 파일에 입력되어 있는 모든 데이터를 읽어 가져온다.

  for (let key in data) {
    if (!data.hasOwnProperty(key)) continue;
    games[key] = Baseball.toObject(data[key]);
  }
  /**
   * for 반복문으로 순회하면서 Baseball.toObject 함수를 호출하고, 각 요소를 Baseball 생성자로 생성한다.
   * 이를 통해 파일의 정제되지 않은 데이터를 정보화하고, Baseball 클래스의 메소드를 활용할 수 있다. 값을 변환한 후에는 data에 정의된
   * 동일 키 이름으로 games 객체 속성을 정의한다.
   */

  return games;
};

exports.getGames = () => {
  return Object.values(getGames());
}; // 모든 게임 정보를 가져와 리스트로 반환한다.

const getGame = (exports.getGame = (id) => {
  if (!id) throw "id를 입력하세요.";

  const games = getGames();
  const game = games[id];
  if (!game) throw "해당하는 게임 정보가 없습니다.";

  return game;
});

exports.makeGame = (digit) => {
  const baseball = new Baseball(
    undefined,
    undefined,
    undefined,
    undefined,
    digit
  );
  const id = baseball.getId();

  const data = model.readFile() || {};
  data[`${id}`] = baseball.attachedAnswer();
  model.writeFile(JSON.stringify(data));

  return baseball.getId();
};

exports.guessAnswer = (id, guess) => {
  if (!id) throw "id를 입력하세요.";
  if (!guess || !guess.length) throw "숫자를 입력하세요.";

  const fileData = model.readFile() || {};
  if (!fileData[id]) throw "해당하는 게임 정보가 없습니다.";

  const game = getGame(id);
  if (+game.getDigit() !== guess.length)
    throw "해당 게임에 지정된 자리수와 일치하지 않습니다.";

  const result = game.matchAnswer(guess);
  const history = { guess: guess.join(""), result: result.toString() };
  game.addHistory(history);
  game.setDone(+game.getDigit() === result.strike);

  fileData[id] = game.attachedAnswer();
  model.writeFile(fileData);

  return Object.assign({ done: frameElement.getDone() }, history);
};

exports.readyGame = () => {
  try {
    model.readFile();
  } catch (err) {
    model.writeFile({});
  }
};

exports.removeGame = (id) => {
  if (!id) throw "id를 입력하세요.";

  const fileData = model.readFile() || {};
  if (!fileData[id]) throw "해당하는 게임 정보가 없습니다.";

  delete fileData[id];
  model.writeFile(fileData);

  return getGames();
};
