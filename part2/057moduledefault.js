// 모듈 기본값 정의하고 가져오기

export default 'hello';
export default function hello(name) {
    console.log('hello' + name);
};
export default class Hello {
    constructor(greeting) {
        this.greeting = greeting;
    }
    hi(name) {
        console.log(`${this.greeting} ${name}`);
    }
}

/*
default 키워드 다음에는 var, let, const 와 같은 변수선언 키워드가 올 수 없다. default는 사실 해당 모듈의 기본값을 선언하는
것이기 때문에 변수 선언 키워드가 오면 문법적 오류가 발생한다.
예를 들어, A라는 모듈이 있으면 A.default = 'hello'와 같이 A 모듈의 기본값을 할당한다고 볼 수 있다.
*/

// 위와 같이 정의한 모듈의 기본값은 다른 모듈에서 다음과 같이 불러올 수 있다.
/*
part2/057/app.js    // 모듈(파일) 이름
import Hello from './hello.js';

// hello.js 에서는 클래스를 기본값으로 내보냈기 때문에 new 키워드를 사용하여 객체를 생성한다.
const koreanHi = new Hello('안녕하세요.');
koreanHi.hi('하린');
*/