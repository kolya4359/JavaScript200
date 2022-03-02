// 일정 시간마다 코드 실행하기 (setInterval)

/*
setInterval 메소드는 인자로 callback 함수와 지연 시간을 받는다.
이를 통해 지연 시간을 두고 일정한 간격으로 callback 함수가 계속 실행된다.
setInterval 메소드를 실행하면 결과값으로 id 값을 반환한다.
id를 clearInterval 메소드 인자에 넣으면, 해당 id의 타이머 작업을 취소할 수 있다.
*/

let count = 0;

const timer = setInterval(() => {
  console.log(`${count++} 번째 함수가 실행된다.`);
}, 1000); // 1초마다 setInterval 이 콜백함수를 실행한다.

clearInterval(timer); // 콘솔 출력이 중단된다.

/* 결과
0 번째 함수가 실행됩니다.
1 번째 함수가 실행됩니다.
2 번째 함수가 실행됩니다.
...
*/
