// 객체 변경되지 않도록 하기 (freeze)

/*
Object 객체의 메소드 freeze는 단어 그대로 객체를 동결(freeze)한다.
freeze 메소드로 객체를 동결한 이후에는 다른 속성을 추가하거나 제거할 수 없다.
*/

let obj = {};

// 객체 obj에 키가 title, 값은 'IDOL'인 속성을 추가.
obj.title = "IDOL";
// obj 객체를 동결.
obj = Object.freeze(obj);
// 동결한 객체 obj에 title 속성을 수정을 시도하지만 freeze를 실행한 뒤라서 객체가 변경되지 않는다.
// 이때는 'use strict' 선언된 상태가 아니므로 에러는 발생하지 않는다.
obj.title = "Euphoria";

console.log(obj); // {title: 'IDOL'}

const changeUntilNum = (obj, num) => {
  "use strict";

  while (true) {
    console.log(obj);

    if (obj.age >= num) {
      obj = Object.freeze(obj);
    }
    obj.age += 1;
  }
};

let profile = { name: "지연", age: 25 };
changeUntilNum(profile, 30);

/* 결과
{name: '지연', age: 25}
{name: '지연', age: 26}
{name: '지연', age: 27}
{name: '지연', age: 28}
{name: '지연', age: 29}
{name: '지연', age: 30}
Uncaught TypeError: Cannot assign to read only property 'age' of object '#<Object>'
*/
