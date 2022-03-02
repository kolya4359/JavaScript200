// Map 객체의 크기 확인하기 (size)

const map = new Map();

map.set("one", 1);
map.set(2, "two");
map.set([1, 2, 3], "Three elements");
map.set({ a: "A", b: "B" }, "object element");
map.set(function () {}, "function element");

console.log(map.size); // 5 - Map 객체의 size 속성으로 변수 map 요소 개수를 확인할 수 있다.
