// 객체 속성 기술자 - 객체의 속성을 정의하는 방법

let user = {
  name: "jeado",
};
let descriptor = Object.getOwnPropertyDescriptor(sure, "name");
console.log(descriptor);

let user2 = {};
// defineProperty(속성을 정의할 객체, 속성명, 속성 기술자)
/* 속성 기술자
value : 값을 나타냄
enumerable : for ... in 루프나 Object.keys 메소드같이 속성을 나열할 때 나열 가능 여부를 정의. false일 경우 나열 안됨.
writable : 값을 변경할 수 있는 여부를 정의. false 일 경우 값이 변하지 않음.
configurable : 속성 기술자를 변경할 수 있는 여부를 정의. false 일 경우 속성 기술자를 다시 변경할 수 없음.
*/
Object.defineProperty(user2, "name", {
  value: "jeado",
  enumerable: true,
  configurable: true,
  writable: false,
});
console.log(user2.name); // jeado
user2.name = "bbo";
console.log(user2.name); // jeado - writable 속성이 false이기 때문에 name을 bbo로 바꿔도 변하지 않음.

let user3 = {
  name: "jeado",
  toString() {
    return this.name;
  },
};
Object.defineProperty(user3, "toString", {
  enumerable: false,
});
for (let key in user3) {
  console.log(key); // name - enumerable 속성이 false 이기 때문에 for ... in 루프로 모든 속성에 접근해서 출력해도 출력이 안됨.
}

let user4 = {};
Object.defineProperty(user4, "name", {
  value: "jeado",
  configurable: false,
});
delete user4.name;
console.log(user4); // {name: "jeado"} - configurable 이 false 라서 delete를 통하여 name 속성을 지워도 지워지지 않고 false만 리턴된다.
Object.defineProperty(user4, "name", {
  writable: true, // configurable 이 false 라서 error만 발생.
});
