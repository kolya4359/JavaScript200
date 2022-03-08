"use strict";
// 엄격모드(Strict Mode) 선언
// 자바스크립트 문법을 런타임에서 검사하고, 문제가 되는 코드가 있는 경우 에러를 반환.

const shortid = require("shortid");
// A-Z, a-z, 0-9, -_를 조합하여 7자리의 비순차적(Non-Sequential)이고 URL에 친숙한(Url-Friendly) 랜덤 고유값을 생성.
const { getRandomInt } = require("./util.js");
const answerSymbol = Symbol("answer");
// 고유값을 반환하는 Symbol을 함수로 호출. 나중에 이 심볼 값을 객체 키로 정의한다.
/**
 * 고유한 값의 uuid를 생성하고 이를 대표 ID로 설정한다. 또한 이 대표 ID를 특정하여 게임진행에 대한 히스토리를 저장하고,
 * 심볼 자료형을 활용하여 게임 정답을 은닉하여 저장한다.
 */

class Baseball {
  constructor(
    id = shortid.generate(),
    history = [],
    done = false,
    answer,
    digit = 3
  ) {
    this.id = id;
    this.history = history;
    this.done = done;
    this[answerSymbol] = answer || Baseabll.makeAnswer(digit);
    this.digit = digit;
  }
  // Baseball의 속성값을 정읳나다. 속성값을 정의할 때는 this 키워드와 함께 속성 이름을 정의하면 된다. 생성자로부터 대입된 값들이 각각 대입되며,
  // 마지막 게임 정답은 심볼 키값으로 정의한다. 기본값이 없는 answer 값은 대입된 값이 존재하면 그대로 할당하고, 없으면 Baseball의 정적 메소드 makeAnswer를 통해
  // 새로운 정답을 생성하여 할당한다.

  getId() {
    return this.id;
  }

  getAnswer() {
    return this[answerSymbol];
  } // 게임 정답값을 반환하는 메소드. 심볼형인 게임 정답은 값을 직접 접근할 수 없기 때문에, 반드시 이 메소드를 실행해야 정답값을 가져올 수 있다.

  getDigit() {
    return this.digit;
  }

  getDone() {
    return this.done;
  }

  addHistory(result) {
    this.history.push(result);
  }

  setDone(done) {
    this.done = done;
  }

  matchAnswer(guess) {
    let strike = 0;
    let ball = 0;

    const answer = this.getAnswer();
    answer.forEach((v, i) => {
      if (guess[i] === v) {
        strike++;
      } else if (answer.indexOf(guess[i]) > -1) {
        ball++;
      }
    });

    return new Result(strike, ball);
  }

  static makeAnswer(digit) {
    let problem = [];
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < digit; i++) {
      let max = 9 - i,
        index = getRandomInt(0, max);
      problem.push(numbers[index]);
      numbers.splice(index, 1);
    }

    return problem;
  }

  static toObject(data) {
    const { id, history, done, answer, digit } = data;
    return new Baseball(id, history, done, answer, digit);
  }

  attachedAnswer() {
    return Object.assign({}, this, { answer: this.getAnswer() });
    /**
     * 숨겨진 게임 결과값을 출력하기 위해 작성된 메소드이다. 원래 심볼형으로 키값이 정의되어 있어, Baseball 클래스의 함수 객체를 출력하면 게임 정답 속성은 출력되지 않는다.
     * getAnswer 메소드를 통해 별도 값을 확인할 순 있지만, 때론 속성들과 함께 반환해야 하는 경우도 생긴다. 이때, getAnswer로 가져온 값을 다시 setAnswer와 같이 값을
     * 세팅하여 반환하는 것은 좋지 않은 방법이다. 따라서 이러한 경우에는 Object.assign 함수를 통해 새로운 객체를 생성하고 여기에 속성을 정의하여 값을 할당하는 방법을 권장한다.
     */
    // object.assign 메서드의 첫 번째 인자는 타겟입니다.
    // 두 번째 인자부터 마지막 인자까지는 소스 오브젝트입니다.
    // 소스 오브젝트는 타겟 오브젝트에 병합됩니다.
    // 그리고 리턴값으로 타겟오브젝트를 반환합니다.
  }
}

class Result {
  constructor(strike, ball) {
    this.strike = strike;
    this.ball = ball;
  }

  toString() {
    let resultString = `${this.strike}S${this.ball}B`;
    if (this.strike === 0 && this.ball === 0) {
      resultString = "OUT";
    }
    return resultString;
  }
}

module.exports = Baseball;
