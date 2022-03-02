// 배열 요소 일괄 변경하기 (map)

/*
배열의 요소를 일괄 변경해야 하는 경우, Array 객체의 map 메소드를 활용한다.
callback 함수를 인자로 받아, callback 함수의 return으로 반환되는 값들을 재조합하여 새로운 배열에 만든다.
*/

const arr = [
  { id: 0, name: "혜림", age: 6 },
  { id: 1, name: "현일", age: 3 },
  { id: 2, name: "현아", age: 5 },
  { id: 3, name: "우림", age: 2 },
];

const arr2 = arr.map((el) => {
  el.age = el.age + 1;
  return el;
});

const arr3 = arr.map((el) => el.name);

console.log(arr2);
console.log(arr3);

/* 결과
[ { id: 0, name: "혜림", age: 7 },
  { id: 1, name: "현일", age: 4 },
  { id: 2, name: "현아", age: 6 },
  { id: 3, name: "우림", age: 3 } ]
[ '혜림', '현일', '현아', '우림' ]
*/
