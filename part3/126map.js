// Map 객체에 요소 추가/삭제/확인하기 (set, get, delete, has)

/*
Map은 데이터 집합체(Collection)의 한 종류이다.
키(Key)와 값(Value)를 한 싸응로 저장하고, 중복된 키는 허용하지 않는다.
또한 반복 가능한 객체로써 Iterator을 통해 Map 객체 내부를 순환할 수 있다.
키와 값의 쌍으로 이루어진 특징으로 인해 Object와 유사하게 여길 수 있지만, 차이점이 있다.
- Map 객체 키(Key)는 다양한 자료형 값으로 정의할 수 있다. 이와 다르게 Object는 문자, Symbol 자료형만 가능하다.
- Map 객체는 반복 가능한 객체로 Symbol.iterator이 기본적으로 정의되어 있다. Object는 없다.
*/

const map = new Map(); // Map 객체를 생성자 변수에 저장한다.

map.set("one", 1); // Map 객체의 set 메소드를 통해 요소를 추가한다.
map.set("two", 2);

// 키가 one인 요소 값을 가져온다. Map 객체의 get 메소드에 키 정보를 넣으면 해당 키에 대한 요소 값을 반환한다.
console.log(map.get("one")); // 1
// 키가 one인 요소를 확인한다. Map 객체의 has 속성을 통해 해당 키 정보가 있는지 확인한다.
console.log(map.has("one")); // true
map.delete("one"); // 키 one인 요소를 삭제한다.

console.log(map.has("one")); // false
console.log(map.has("two")); // true
