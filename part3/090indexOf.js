// 배열의 특정 요소 위치 확인하기 (indexOf)

// 배열.indexOf(검색할 값, 시작 인덱스)

const arr = ["spring", "summer", "fall", "winter", "is", "down"];

console.log(`"winter" is in this index ${arr.indexOf("winter")}`);
console.log(
  `"winter" is not in here, look this value ${arr.indexOf("winter", 4)}`
);

/* 결과
"winter" is in this index 3
"winter" is not in here, look this value -1
*/
