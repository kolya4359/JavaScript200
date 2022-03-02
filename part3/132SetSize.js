// Set 객체의 크기 확인하기 (size)

const s = new Set();

s.add("one");
s.add(2);
s.add([1, 2, 3]);
s.add({ a: "A", b: "B" });
s.add(function () {});

console.log(s.size); // 5
s.clear; // Set 객체의 clear 메소드로 값을 초기화한다. 모든 값이 삭제된다.
console.log(s.size); // 0
