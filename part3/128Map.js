// Map 객체 요소 나열하기 (keys, values, entries)

const map = new Map();

map.set("one", 1);
map.set("two", 2);
map.set("three", 3);

const keys = map.keys(); // 키 정보들을 모아 MapIterator 객체로 반환한다.
const values = map.values(); // 값 정보들을 모다 MapIterator 객체로 반환한다.
const entries = map.entries(); // [ 키, 값 ]형태의 정보들을 모아, MapIterator 객체로 반환한다.

// iterator의 next() 함수를 통해 첫 번째 요소가 반환된다.
console.log(keys.next().value); // one
console.log(values.next().value); // 1
console.log(entries.next().value); // [ 'one', 1 ]

// next()로 반환된 요소를 제외하고, 남은 요소들을 확인할 수 있다.
console.log(keys); // MapIterator {'two', 'three'}
console.log(values); // MapIterator {2, 3}
console.log(entries); // MapIterator {[ 'two', 2], [ 'three', 3 ]}

/*
Map에서는 저장한 순서대로 요소가 정렬되어 저장된다. 이 Map 객체의 요소들을 확인하기 위한 방법으로 Map 객체의 내장 함수 keys, values, entries 가 있다.
- keys() : Map 객체 요소의 키(Key) 정보만 모아 Iterator 객체로 반환한다.
- values() : Map 객체 요소의 값(value) 정보만 모아 Iterator 객체로 반환한다.
- entries() : Map 객체 요소의 키(Key)와 값(value)을 한 쌍으로 배열로 만든다. 배열 순서는 키가 0 인덱스이고, 값이 1 인덱스에 대입되고, 이 배열들을 모아
iterator 객체로 나열하여 반환한다.
*/
