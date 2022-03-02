// 객체 병합 확장하기 (assign)

// Object.assign(반환될 객체, ...병합될 다른 객체들);

/*
첫 번째 인자로 대입된 객체를 기준으로 병합한다. 이 객체를 기준으로 다른 객체들이 병합되기 때문에
첫 번째 인자는 원본이 수정되어 반환된다.
*/

const obj1 = { one: 1, two: 2, three: 3 };
const obj2 = { name: "탄이", age: 5, address: "Seoul" };
const obj3 = { friends: ["혜림", "현아", "현일", "우림"] };

const newObj1 = Object.assign({}, obj1);
const newObj2 = Object.assign({}, obj1, obj2);
newObj1.four = 4;

/*
newObj1 객체는 빈 객체를 기준으로 병합되었기 때문에 obj1 객체의 복사본이라 할 수 있다.
따라서 새롭게 추가된 속성(four)은 obj1 이나 newObj2에서 확인할 수 없다.
*/
console.log(obj1); // {one: 1, two: 2, three: 3}
console.log(newObj1); // {one: 1, two: 2, three: 3, four: 4}
console.log(newObj2); // {one: 1, two: 2, three: 3, name: '탄이', age: 5, address: 'Seoul'}

console.log("\n");

const newObj3 = Object.assign(obj1, obj3);

console.log(obj1); // {one: 1, two: 2, three: 3, friends: ["혜림", "현아", "현일", "우림"]}
console.log(newObj1); // {one: 1, two: 2, three: 3, four: 4}
console.log(newObj2); // {one: 1, two: 2, three: 3, name: '탄이', age: 5, address: 'Seoul'}
console.log(newObj3); // {one: 1, two: 2, three: 3, friends: ["혜림", "현아", "현일", "우림"]}
