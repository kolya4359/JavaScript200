// Get, Set을 통한 속성 접근 관리
// 값에 접근하는 방식을 정의하는 객체를 전달할 때 이 객체를 접근 기술자(Accessor Descriptor)라 하고, get과 set을 메소드로 가진다.

let user = {};
Object.defineProperty(user, "age", {
  // get : 속성에 접근할 때 호출
  get: function () {
    return this._age;
  },
  // set : 속성에 값을 대입할 때 호출
  set: function (age) {
    if (age < 0) {
      console.error("0보다 작은값은 올 수 없습니다.");
    } else {
      this._age = age;
    }
  },
  enumerable: true,
});
user.age = 10;
console.log(user.age);
user.age = -1;

let user2 = {
  get name() {
    return this._name;
  },
  set name(val) {
    if (val.length < 3) {
      throw new Error("3자 이상이어야 합니다.");
    }
    this._name = val;
  },
};
user2.name = "harin";
console.log(user2.name);
user2.name = "ha";

// 속성 이름에 _를 붙이는 것은 암묵적으로 비공개(Private) 속성임을 나타냄. 자바스크립트 객체는 속성 접근 제한자가 없어서 모든 속성은 공개(Public)이다.
// 그래서 대체로 이름 규칙을 통해 비공개임을 나타냄.
