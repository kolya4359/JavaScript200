// Set 객체 값 나열하기 (keys, values, entries)

const s = new Set();

s.add("one");
s.add("two");
s.add("three");

/*
Set 객체는 값의 집합이기 때문에, 키(key)를 모으는 것은 의미가 없다.
따라서 Set 객체는 keys 메소드와 values 메소드의 동작 방식을 동일하게 처리한다.
values 메소드를 호출하면 Set 객체의 값을 모아 SetIterator 객체로 반환한다.
entries 도 마찬가지로 [ 키, 값 ] 을 Iterator 객체로 반환하지만 Set은 값만 처리하기 때문에 키 대신 값을 전달한다.
따라서 {['one', 'one'], [ 'two', 'two' ], [ 'three', 'three' ]}이 변수에 할당된다.
*/
const keys = s.keys();
const values = s.values();
const entries = s.entries();

console.log(keys.next().value); // one
console.log(values.next().value); // one
console.log(entries.next().value); // ['one', 'one']

console.log(keys); // SetIterator { 'two', 'three' }
console.log(values); // SetIterator { 'tow', 'three' }
console.log(entries); // {[ 'two', 'two' ], [ 'three', 'three' ]}
