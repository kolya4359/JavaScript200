// this 이해하기

/*
this는 함수가 어떻게 호출되는지에 따라 동적으로 결정된다. this의 주요 목적은 작성된 코드를 여러 목적으로 재사용하기 위해 존재하는데,
호출되는 방식에 따라 동적으로 결정되어 간혹 잘못된 코드를 작성할 수 있다.
this는 전역에서 사용할 수 있고, 함수 안에서도 사용할 수 있다. 하지만 함수는 객체 안에 메소드로 정의될 수도 있고,
생성자 함수로 사용될 수도 있고, 특정 로직을 계산하여 값을 반환하는 목적으로 사용할 수도 있다.
이렇게 함수가 다양하게 사용되다 보니 this도 각 함수별로 다르게 해석된다. class 안에서 사용되는 this는 생성자 함수와 동일하다.
*/
/*
브라우저 환경에서 this를 전역에서 사용하면 전역 객체인 Window 객체를 가리킨다. 그래서 valueA는 window.valueA로 해석되고
console.log(valueA)는 console.log(window.valueA)로 해석된다.
*/
this.valueA = "a";
console.log(valueA);
valueB = "b";
console.log(valueB);

// 함수에서 this를 사용하고 함수를 호출하면 this는 전역 객체인 Window를 가리킨다.
function checkThis() {
  console.log(this);
}
// 하지만 함수 내의 코드를 엄격한 모드(strict)로 실행하게 되면 this는 undefined가 된다.
function checkThis2() {
  "use strict";
  console.log(this);
}
checkThis();
checkThis2();

// Product 함수는 생성자 함수로 작성되었다. 하지만 new 키워드 없이 호출되면 이때 this는 전역 객체인 Window를 가리킨다.
// new 키워드와 함께 호출해야지만 this 는 프로토타입 객체와 연결된 객체가 반환된다.
function Product(name, price) {
  this.name = name;
  this.price = price;
}
const product1 = Product("가방", 2000);
console.log(window.name);
console.log(window.price);

// 객체 내에 정의된 함수인 메소드 안에서 this를 사용하고 객체를 통해 메소드를 호출하면 this는 그 객체를 가리킨다.
const product2 = {
  name: "가방2",
  price: 3000,
  getVAT() {
    return this.price / 10;
  },
};
const valueOfProduct2 = product2.getVAT();
console.log(valueOfProduct2);

// 메소드 안에서 this를 정의했지만 메소드를 다른 변수에 저장하고 그 변수를 통해 호출하면 일반적인 함수 호출이 되어 this는 전역 객체를 가리킨다.
// 즉, 호출하는 시점에 점(.) 연산자와 함께 객체가 주어져야 메소드 안의 this가 호출의 주체인 객체가 된다.
const calVAT = product2.getVAT;
const VAT2 = calVAT();
console.log(VAT2);

// this는 bind 메소드를 통해 전달한 인자값으로 변경할 수 있다. bind 외에 call과 apply 메소드 또한 this가 가리키는 값을 변경할 수 있다.
const newCalVAT = calVAT.bind(product2);
const VAT3 = newCalVAT();
console.log(VAT3);

// 메소드 안에서 중첩 함수로 함수가 작성됐을 때 내부 함수의 this는 전역 객체를 가리킨다.
// 그래서 1초 뒤 this.count는 window.count로 해석되어 undefined에 값을 더하려고 해서 NaN이 콘솔에 출력된다.
const counter1 = {
  count: 0,
  addAfter1Sec() {
    setTimeout(function () {
      this.count += 1;
      console.log(this.count);
    }, 1000);
  },
};
counter1.addAfter1Sec();
/*
화살표 함수와 bind가 자바스크립트에 추가되기 전에 대체로 this에 대한 레퍼런스를 다른 변수에 보관하였다가 내부 함수에서 그 변수를 참조하는 방식으로 메소드를
소유한 객체에 접근하였다. 위 코드를 예로 들면 다음과 같이 작성할 수 있다.
const counter1 = {
    count: 0,
    addAfter1Sec() {
    const me = this;
    setTimeout(function() {
    me.count += 1;
    console.log(this.count);
    }, 1000)
    }
};
counter1.addAfter1Sec();
*/

// 화살표 함수에서 this를 사용하면 this는 부모 환경의 this를 가리킨다. 그래서 중첩된 함수로 작성되었을 때
// 화살표 함수를 사용하면 화살표 함수는 부모 함수의 this 와 같다.
const counter2 = {
  count: 0,
  addAfter1Sec() {
    setTimeout(() => {
      this.count += 1;
      console.log(this.count);
    }, 1000);
  },
};
counter2.addAfter1Sec();
/*
화살표 함수에서 this는 일반적인 this와 다르게 호출 시점에 동적으로 정의되는 것이 아니라 코드를 작성하는 시점에 정적으로 결정된다.
화살표 함수를 작성하는 시점의 부모 환경에서의 this로 정의되고 변경이 불가능하다. 즉, 다음과 같이 bind를 통해 this를 변경할 수 없다.
const arrowFunc = () => {
    console.log(this);
}
const nowArrowFunc = arrowFunc1.bind({d : 2});
nowArrowFunc(); // Window 전역 객체가 콘솔에 출력된다.
*/
