import React, { Component } from "react";

// 임의로 작성된 컴퍼넌트 파일(*.jsx*.js)를 사용하기 위해
// 먼저 import수행
// main 폴더에 있는 TodoMain.jsx 파일을
// TodoMain이라는 이름으로 사용

// 선언을 하면 render() 함수 내에서
// 일반 tag와 같은 방식으로 사용할 수 있다
import TodoMain from "./main/TodoMain";
/**
 *  클래스 type 컴퍼넌트
 * class 키워드로 시작되고
 * 반드시 component를 extends(상속)하여 준비
 */
class App extends Component {
  id = 5;
  state = {
    input: "",
    todoList: [
      { id: 0, text: "오늘 마감할일", checked: true },
      { id: 1, text: "공모전 서류제출", checked: true },
      { id: 2, text: "리엑트 폼 작성", checked: false },
      { id: 3, text: "스프링 시큐리티", checked: false },
      { id: 4, text: "Naver RestTemplate", checked: false }
    ]
  };

  /*
  TodoForm input box에 value={input}와 같은 형태가 되고
  {input}은 props상태로 component에 전달되어 readOnly상태가 된다
  input box에 onChange이벤트를 설정하여
  키보드에서 입력된 글자를 {input}에 강제로 붙여주는 일을 수행해야한다

  e.target.value = 키보드 입력을 캡처하는 키보드 이벤트 메시지
  */
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  // Enter 키를 눌렀을때 자동으로 추가 버튼이 클릭되도록
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleCreate = () => {
    const { input, todoList } = this.state;
    // 현재 클래스에서 만든 method를 통째로
    // 자식 컴퍼넌트에 전달하기 위해 props로 생성

    this.setState({
      input: "",
      // 기존 객체(JSON) 배열에 새로운 객체(JSON)를 추가하는 함수
      todoList: todoList.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  handleToggle = id => {
    // 여기부터

    const { todoList } = this.state;
    // id 매개 변수에 담겨 있는 값이 객체 배열에 몇번째
    // 위치 값인가
    const index = todoList.findIndex(todo => todo.id === id);

    // index에 해당하는 요소를 추출
    const selectTodo = todoList[index];
    // this.setState({
    //    checked: !selectTodo.checked
    // });
    // 기존의 todoList를 nextTodoList에 복사해 두기
    const nextTodoList = [...todoList];
    // 기존의 checked 값이 true -> false , false-> true
    nextTodoList[index] = {
      ...selectTodo,
      checked: !selectTodo.checked
    };

    // 여기까지가 1개 아이템의 checked 값을 변경시키는 코드

    // 여기에 오면 비로소 render()를 호출해서 화면에 반영
    this.setState({
      todoList: nextTodoList
    });
  };

  // 현재 클릭된(id가 선택된) 아이템만 남기고
  // 나머지 리스트만 추출하기
  handleDelete = id => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter(todo => todo.id !== id)
    });
  };

  // react lifeCycle 중에 작동되는 method
  // 최초 어플이 실행되면 한번 작동이 되고
  // 데이터나 화면 디자인이 변경되면 호출되는 method
  render() {
    // 자식 component에 데이터를 전달하기 위해
    // state로 선언된 데이터들을 props로 변환
    const { input, todoList } = this.state;
    const {
      handleCreate,
      handleChange,
      handleKeyPress,
      handleToggle,
      handleDelete
    } = this;
    return (
      <div>
        <TodoMain
          input={input}
          todoList={todoList}
          onCreate={handleCreate}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    );
  }
}
export default App;
