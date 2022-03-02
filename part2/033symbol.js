// ES6에 추가된 새로운 자료형인 심볼형

const symbol = Symbol(); // 심볼은 함수 호출을 통해 생성 가능. new 키워드 (new Symbol())로 호출할 경우 에러 발생
const hello = Symbol("hello"); // 디버깅 용도

console.log(Number(3) === Number(3)); // true
console.log(Symbol("symbol") === Symbol("symbol")); // false - 심볼은 고유한 값을 반환하기 때문에 false가 출력.
console.log(Symbol() === Symbol()); // false - 심볼은 고유한 값을 반환하기 때문에 false가 출력.
console.log(typeof Symbol()); // symbol

const nationility = Symbol("nationility");
const user = {
  name: "jay",
};
user[nationility] = "korean";
console.log(user[nationility]); // korean - 심볼은 객체의 키로 사용 가능.

for (let key in user) {
  console.log(key); // name - 심볼이 객체의 키로 사용되면 for-in 루프를 통해 가져올 수 없다.
}
console.log(Object.keys(user)); // ["name"]
console.log(Object.getOwnPropertyNames(user)); // ["name"]
console.log(JSON.stringify(user)); // {"name":"jay"}

const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties); // [Symbol(nationility)] - getOwnPropertySymbols 메소드를 통해 객체의 키를 가져올 수 있다.
console.log(user[symbolProperties[0]]); // korean
