// 배열 내 값을 누적시키기 (reduce)

// 배열.reduce(누적된 값(필수), 현재 요소 값(필수), 현재 인덱스, 원본 배열) => {
//  return 누적값으로 반환되는 값
// }, 초기값);

const numArr = [1, 2, 3, 4, 5];

/*
reduce의 callback 함수 매개변수로, 첫 번째 acc(누적된 값) 과 el(현재 요소값)을 정의한다.
매개변수로 전달된 acc 와 el을 합산하여, callback 함수 결과값으로 반환한다. 이렇게 반환된 값은 reduce로 순환된 다음 요소 차례에서
acc로 할당되어 전달된다. 즉, return 으로 반환된 값은 다음 배열 요소의 acc이 된다는 의미이다. 또한 배열의 모든 요소들을 순환하고 난
마지막 반환값이 바로 reduce 메소드의 결과값이 된다.
*/
const result = numArr.reduce((acc, el) => {
  /*
    초기값으로 숫자 0을 대입한다. 이 초기값은 첫 번째 요소에서는 acc로 대입된다.
    따라서 배열의 각 요소를 순환하며 초기값 0부터 각 요소의 값들을 합산하게 되었을 때, 0 + 1, 1 + 2, 3 + 3, 6 + 4, 10 + 5 와 같이 진행된다.
    */
  return acc + el;
}, 0);

console.log(result); // 15
