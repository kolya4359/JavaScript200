// 일정 시간 후에 코드 실행하기 (setTimeout)

const timer = {
  run: function () {
    // timer 객체에 run 속성을 추가한다. run 속성값으로 함수를 대입한다.
    if (this.t) console.log("이미 실행된 타이머가 있습니다.");

    this.t = setTimeout(function () {
      console.log("1초 뒤에 실행됩니다.");
    }, 1000);
  },
  cancel: function () {
    if (this.t) clearTimeout(this.t);
    this.t = undefined;
  },
};

timer.run();
timer.cancel();
timer.run();
// 결과 : '1초 뒤에 실행됩니다.'

// setTimeout 메소드 자체는 비동기로 실행되는 코드다. 아래의 예제는 그 특징을 잘 보여준다.

setTimeout(() => {
  console.log("JavaScript");
}, 0);

console.log("200제");
/* 결과
200제
JavaScript
*/
/*
이전 setTimeout이 아무리 지연 시간이 0이어도, console.log('200제') 코드 다음으로 실행 스택에 쌓인다.
따라서 '200제' 문자열이 먼저 출력되고, 그 다음에 'JavaScript' 문자열이 콘솔 출력된다.
*/
