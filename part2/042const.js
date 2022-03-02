// const 변수

const URL = "http://js.com";
URL = "http://js.com"; // TypeError

if (true) {
  const URL2 = "http://js.com";
}

console.log(URL2); // Error

const CONST_USER = { name: "jay", age: 30 };
console.log(CONST_USER.name, CONST_USER.age); // jay 30
CONST_USER.name = "jay2";
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age); // jay2 31
CONST_USER = { name: "bbo" }; // Uncaught TypeError: Assignment to constant variable.
