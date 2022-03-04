// Event Emitter 이해하기

/**
 * 일반적으로 어떤 사건이 특히 예외적이거나 중요하게 발생되는 것을 이벤트라고 명칭한다.
 * 프로그래밍에서도 "어떤 사건의 발생"이라는 측면에서 이벤트라고 부르며, 발생된 이벤트에 대한 응답으로 반응하는 것을 리스너(Listener)라고 한다.
 * Event Emitter는 이벤트-리스너 패턴으로 구현된다.
 */

class Emitter {
  constructor() {
    this.events = {};
  }

  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }

  emit(type) {
    if (this.events[type]) {
      this.events[type].forEach((listener) => {
        listener();
      });
    }
  }
}

module.exports = Emitter;
