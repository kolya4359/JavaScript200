// 반복 가능한 객체와 반복자 이해하기

/*
자바스크립트에서는 반복(Iteration) 동작에 대한 규약(Protocol)로, Iterable(반복 가능한)과 Iterator(반복자)를 정의한다.

- The Iterable Protocol(반복 가능한 규약) : 반복 가능한 규약은 객체 안의 값들을 반복(Iteration)할 수 있도록, 반복 동작을 정의하는 것을 허용한다.
즉 '반복 동작에 대한 정의'란 for-loop처럼 단순 반복 작업이기도 하며, 이와 다르게 어떻게 반복하고, 반복하면서 어떤 동작을 수행하는 지 직접 정의하는 것도 해당된다.
우선 객체가 반복 가능하려면, 객체 내부에 @@iterator 메소드를 구현해야 한다. 구현 할 때 속성 키(Key)는 반드시 Symbol.iterator 이어야 하고, 속성값(Value)은
매개변수가 없는 함수가 대입된다. 그리고 이 함수는 반복자 규약(The Iterator Protocol)을 따르는 객체(Object)를 반환한다.

- The Iterator Protocol(반복자 규약) : 반복자 규약은 연속된 값을 만드는 방법을 정의한다. 객체가 반복자 규약을 충족하려면, next 메소드를 가지고 있어야 한다.
이때 객체속성 키(Key)는 next()이고, 속성값(Value)은 매개변수가 없는 함수로 정의한다.
여기서 함수는 value와 done 속성을 가진 객체를 반환한다. 따라서 반복자의 next 메소드를 호출하면, 속성 키 이름이 value와 done인 객체가 반환된다.
이러한 반복자 규약을 충족하는 객체를 iterator라고 한다.
*/

const items = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];
const seq = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        const value = items[i];
        i++;
        const done = i > items.length;
        return { value, done };
      },
    };
  },
};

for (let s of seq) console.log(s);
const [a, b, c, ...arr] = seq;
console.log("a >>> ", a);
console.log("b >>> ", b);
console.log("c >>> ", c);
console.log("arr >>> ", arr);

/*
반복 가능한 규약에 따라 작성된 객체(Iterables)는 for...of, 비구조화 할당, 나머지 변수와 함께 주로 사용된다.
그리고 이를 통해 next()가 호출되어, 연속된 요소들이 차례대로 반환된다.
*/
