// Async 이해하기

/*
async 함수는 함수 안의 await 구문과 함께 비동기 작업을 제어한다. await 키워드는 반드시 async 함수 안에서만 유효하다.

async 함수의 동작 방식은 다음과 같다.
처음 async 함수가 호출되어 await 키워드가 있는 비동기 작업(promise 객체)이 실행되면, 해당 비동기 함수는 이벤트 루프를 통해 비동기로 작업을 처리한다.
그동안 async 함수는 이러한 비동기 작업이 완료될 때까지 일시 중지 상태로 비동기 작업(promise 객체)의 해결(resolve)을 기다린다. 이 작업이 완료되면
async 함수가 다시 실행되고 함수 결과를 반환한다.

async 함수를 선언하는 방법에는 async함수 선언문(async function)과 표현식(async function expression)이 있다.
이 선언문과 표현식은 함수의 선언문/표현식과 유사하다. 다만 async 함수는 function 선언 앞에 async 키워드가 붙는다.
*/

function doJob(name, person) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (person.stamina > 50) {
        person.stamina -= 30;
        resolve({
          result: `${name} success`,
        });
      } else {
        reject(new Error(`${name} failed`));
      }
    }, 1000);
  });
}

const harin = { stamina: 100 };

/*
비동기로 처리되는 doJob 함수를 연달아 호출한다. 비동기 로직 앞에 await 키워드를 추가하면,
비동기 작업이 끝날 때까지 기다렸다가 다음 문장 코드를 처리한다.
에러 발생 시 try-catch 메소드를 통해 전달한 함수가 호출되어 거절된 이유인 에러 객체가 콘솔에 에러로 출력된다.
*/
const execute = async function () {
  try {
    let v = await doJob("work", harin);
    console.log(v.result);
    v = await doJob("study", harin);
    console.log(v.result);
    v = await doJob("work", harin);
    console.log(v.result);
    v = await doJob("study", harin);
  } catch (e) {
    console.log(e);
  }
};

execute();
