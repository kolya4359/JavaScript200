// 배열 특정 위치의 요소 추출하기 (slice)

// 배열.slice(시작 인덱스, 끝 인덱스)
// 끝 인덱스에 있는 요소는 제외하고 그 이전까지의 요소들을 추출한다.

const arr = ["melon", "lemon", "source", "apple", "juice"];
console.log(
  `과일이 아닌 요소는 ${arr.slice(2, 3)}와 ${arr.slice(4, 5)} 입니다.`
);
console.log(arr.slice(0, 10)); // 배열 길이보다 큰 값을 두 번째 인자로 대입하면 배열을 모두 반환.

/* 결과
과일이 아닌 요소는 source와 juice입니다.
["melon", "lemon", "source", "apple", "juice"]
*/

/*
slice 함수는 원본 배열을 변경하지 않고 복제(얕은 복사)를 수행한다.
따라서 splice 함수를 통해 처리된 결과값을 활용하려면 별도의 변수로 대입해야 한다.
*/
