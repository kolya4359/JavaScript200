// 배열 순환하기 (for-of)

const products = [{ name: "가방" }, { name: "노트북" }];

for (const item of products) {
  console.log(item.name);
}

const iter = products[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/* 결과
가방
노트북
{value: {name: '가방'}, done: false}
{value: {name: '노트북'}, done: false}
{value: undefined, done: true}
*/
