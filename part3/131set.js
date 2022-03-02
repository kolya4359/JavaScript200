// Set 객체의 값 추가/삭제/확인하기 (add, delete, has)

// Set 값의 집합체(Collection)이다. Set은 값으로만 이루어진 데이터 구조를 가진다. 또한 Set 객체 안에서 중복값은 허용하지 않는다.
const s = new Set();

s.add("one");
s.add("two");
s.add("three");

console.log(s.has("one")); // true
s.delete("one");
console.log(s.has("one")); // false
console.log(s.has("two")); // true
