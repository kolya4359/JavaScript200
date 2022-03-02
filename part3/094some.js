// 배열 요소가 특정 조건을 만족하는지 확인하기 (some)

/*
Array 객체의 some 메소드는 callback 함수의 return 값이 true를 반환할 때까지만 배열 요소를 순환한다.
true를 반환하는 요소의 다음 요소들에 대해서는 더이상 처리하지 않는다. 만일 마지막 요소까지 순환해도 true를 반환하지 않으면 false를 반환한다.
*/

const arr = [
  { id: 0, name: "혜림", age: 6 },
  { id: 1, name: "현일", age: 3 },
  { id: 2, name: "현아", age: 5 },
  { id: 3, name: "우림", age: 2 },
];

const isHyunAHere = arr.some((el) => el.name == "현아");
const olderThanSix = arr.some((el) => el.age > 6);

console.log(isHyunAHere); // true
console.log(olderThanSix); // false
