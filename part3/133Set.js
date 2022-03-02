// Set 객체로 Array 중복 요소 없애기

const arr = ["one", "two", "three", "two", "one", "four"];
// 먼저 배열을 Set으로 변환한다. 'new Set()'의 인자로 arr 변수를 넣으면 Set 생성자를 통해 배열이 Set으로 변환된다.
// Set 객체는 중복값을 허용하지 않는다. 따럿 Set으로 변환되면서 기존 배열의 중복값이 제거된다.
const s = new Set(arr);
// [] 와 ... 연산자를 통해 Set 객체값들이 전개된 배열로 변환된다.
console.log([...s]); // [ 'one', 'two', 'three', 'four' ]
