// 문자열 순환하기 (for-of)

// for (변수 of 반복 가능한 객체) { 실행할 문장 }
/*
for...of문은 순환할 때 반복 가능한 객체가 반환하는 반복자(iterator)의 next를 호출한다.
next 호출 결과로 반환된 객체 done 속성이 true가 될 때까지 반복한다.
*/

const str = "hello";

for (const item of str) {
  console.log(item);
}

const iter = str[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/* 결과
h
e
l
l
o
{value: 'h', done: false}
{value: 'e', done: false}
{value: 'l', done: false}
{value: 'l', done: false}
{value: 'o', done: false}
{value: undefined, done: true}
*/
