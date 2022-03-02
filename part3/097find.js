// 배열의 특정 조건을 충족하는 요소 찾기 (find)

/*
Array 객체의 find 메소드는 인자로 대입된 callback 함수를 통해 배열 내부를 순환하면서, 특정 조건을 만족하는 첫 번째 요소를 반환한다.
*/

const arr = [
  { name: "우림", age: 2 },
  { name: "현아", age: 5 },
  { name: "탄이", age: 30 },
  { name: "현일", age: 3 },
  { name: "혜림", age: 6 },
];

const myFriend = arr.find((a) => a.age === 30);
console.log(myFriend); // {name: '탄이', age: 30}
