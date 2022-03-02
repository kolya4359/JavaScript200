// Map 객체 순환하기

const map = new Map();

// 키를 (value) => value * 2 함수로 정의하고, 값은 전달된 num을 할당한다.
for (let num of [1, 2, 3, 4, 5]) {
  map.set((value) => value * 2, num);
}

// map 변수를 for...of 로 순환한다. 순환할 때 매개변수 func와 value 변수를 전달받는다. value 변수를 다시 인자로 넣어 함수 func를 실행한다.
for (let [func, value] of map) {
  console.log(func(value));
}

/* 결과
2
4
6
8
10
*/
