// 할 일 관리 애플리케이션 만들기 - TodoManager 클래스 정의

class Todo {
  constructor(contents, done) {
    this.contents = contents;
    this.done = done;
  }
  // 완료 여부를 토글하는 메소드. 완료된 상태에서 toggle 메소드를 호출하면 완료되지 않은 상태가 된다.
  toggle() {
    this.done = !this.done;
  }
}

class TodoManager {
  constructor(todos = []) {
    // TodoManager 내부에서만 사용 할 속성이라 _todos라 이름 짓고, _todos는 단순히 전달받은 객체를 담고 있는 배열이 아니라 Todo 타입의 객체를 담은 배열이다.
    // 그리고 addTodo 메소드를 호출하면서 _todos에 Todo 타입 객체들을 배열에 추가한다.
    this._todos = [];
    todos.forEach((todo) => {
      this.addTodo(todo.contents, todo.done);
    });
  }

  addTodo(contents, done = false) {
    const newTodo = new Todo(contents, done);
    this._todos.push(newTodo);
    return newTodo;
  }

  getList() {
    return this._todos;
  }
  // 남은 할 일 개수를 의미하는 leftTodo 속성을 오직 읽기만 가능하게 하기 위해 get 키워드를 사용한다.
  get leftTodoCount() {
    return this._todos.reduce((p, c) => {
      if (c.done === false) {
        return ++p;
      } else {
        return p;
      }
    }, 0);
  }
}

export { Todo, TodoManager };
