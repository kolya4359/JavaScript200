// 자료형 확인하기

const str = "JavaScript";
const strObj = new String("JavaScript");
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function () {};
const arr = [10, 200, 4000];
const obj = { a1: "test" };
const empty = null;
const notCalled = undefined;

console.log(typeof str === "string"); //true
console.log(typeof strObj === "object"); // true
console.log(typeof num === "number"); // true
console.log(typeof numObj === "object"); //true
console.log(typeof bool === "boolean"); //true
console.log(typeof boolObj === "object"); //true
console.log(typeof func === "function"); // true
console.log(typeof arr === "object"); // true
console.log(typeof obj === "object"); // true
console.log(typeof empty === "object"); //true
console.log(typeof notCalled === "undefined"); // true

/*
typeof는 특정 원시 자료형 확인하거나, 원시 자료형과 객체형을 구분하기 위해 활용하는 것이 좋다.
만일 객체를 확인하고 싶다면, instanceof 를 사용하는 것이 좋다. instanceof는 원시 타입을 확인하는데 적합하지 않지만, 어떤 객체인지 구분하는데 용이하다.
그렇기 때문에 instanceof는 어떤 종류의 객체인지 확인하는데 주로 활용한다.
*/

console.log(str instanceof String); // false
console.log(strObj instanceof String); // true
console.log(num instanceof Number); // false
console.log(numObj instanceof Number); // true
console.log(bool instanceof Boolean); // false
console.log(boolObj instanceof Boolean); // true
console.log(arr instanceof Array); // true
console.log(obj instanceof Object); // true
console.log(func instanceof Function); // true
console.log(empty instanceof Object); // true
console.log(notCalled instanceof undefined); // TypeError: Right-hand side of 'instanceof' is not an object
