// Promise 조합하기

/*
하나의 비동기 계산이 다른 비동기 계산의 결과에 의해 처리되어야 하는 경우가 많다.
Promise가 나오기 이전에는 콜백 패턴을 통해 비동기 처리를 하였고, 중첩된 비동기 코드들을 처리하다 보면
콜백 피라미드 형태의 코드들이 쉽게 나왔다.

이런 비동기 코드들의 조합을 Promise 기반으로 작성하면 명료한 코드를 작성할 수 있고 예외 처리를 손쉽게 할 수 있다.
Promise의 then 메소드에서 새로운 비동기 코드를 실행하는 Promise를 반환할 수 있는데
다음 then 메소드는 새롭게 만들어진 Promise 코드가 이행되기 전까지 호출되지 않는다.

다음의 예제는 1초 후에 주어진 이름의 일을 수행하여 이행 시 스테미나를 차감할 값을 반환한다.
1초 후에 일을 수행하는 약속(Promise)를 연속적으로 처리한다.
*/

function doJob(name, person) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (person.stamina > 50) {
        resolve({
          result: `${name} success`,
          loss: 30,
        });
      } else {
        reject(new Error(`${name} failed`));
      }
    }, 1000);
  });
}

const harin = { stamina: 100 };

doJob("work", harin)
  .then((v) => {
    console.log(v.result);
    harin.stamina -= v.loss;
    return doJob("study", harin);
  })
  .then((v) => {
    console.log(v.result);
    harin.stamina -= v.loss;
    return doJob("work", harin);
  })
  .then((v) => {
    console.log(v.result);
    harin.stamina -= v.loss;
    return doJob("study", harin);
  })
  .catch((e) => console.log(e));

/* 결과
work success
study success
Error: work failed
*/
