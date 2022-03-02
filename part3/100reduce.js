// 중첩된 배열을 단일하게 만들기 (reduce)

const arr = [1, [2, 3], [4, 5, 6], ["배열", "나열하기"], "JavaScript"];

/*
callback 함수의 첫 번째 인자 acc와 현재 요소값인 el을 concat 으로 병합한다.
return문 만으로는 acc 값이 어떤 자료형인지 확인할 수 없지만, 빈 배열이 초기값으로 할당된 것을 알 수 있다.
초기값으로 빈 배열을 대입한다. 따라서 빈 배열 [] 부터 [1], [1,2,3], [1,2,3,4,5,6] ... 의 연속으로 arr 내부 요소들을 차곡차곡 병합한다.
*/
const result = arr.reduce((acc, el) => {
  return acc.concat(el);
}, []);

console.log(result); // [ 1, 2, 3, 4, 5, 6, '배열', '나열하기', 'JavaScript' ]
