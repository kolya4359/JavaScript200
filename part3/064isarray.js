// 배열 자료형 확인하기(isArray)

function callRoll(students) {
  if (!Array.isArray(students)) return; // 만일 변수 students가 배열이 아니면 의도하지 않은 자료형이라 판단하고 함수를 빠져나간다.

  students.forEach((student) => {
    console.log(`Are you here, ${student}`);
  });
}

const studenst = ["Jun", "Ali", "Murry", "Toby"];
callRoll(students);
/*
결과
Are you here, Jun
Are you here, Ali
Are you here, Murry
Are you here, Toby
*/
