// 모듈을 여러 이름으로 내보내고 가져오기

export const version = "v1.0";

export var personA = {
  name: "a",
};

export function add(a, b) {
  return a + b;
}

export class Person {
  constructor(name) {
    this.name = name;
  }
}
/*
클래스, 함수, 변수들을 선언한 후에 export 로 내보낼 수 있다. 하지만 export 바로 뒤에 이름을 작성하면 안되고 {} 안에 나열해야 한다.
class Person {
    constructor(name) {
    this.name: name;
    }
}
const version = 'v1.0';

export Person;  // 문법 오류
export { version, Person };
*/

/*
위 예제에서 내보낸 이름들은 다음과 같이 다른 모듈에서 불러올 수 있다.
import { add, Person, version } from './hello.js';

const result = add(1, 2);
const harin = new Person('하린');

console.log(result);
console.log(harin.name);
console.log(version);
*/
/*
다른 모듈에서 가져온 이름은 오직 읽기만 가능하다. 즉, 해당 이름에 다른 값을 할당할 수 없다.
import {personA} from './hello.js'
personA = 'v2'; // 오류 발생
*/
