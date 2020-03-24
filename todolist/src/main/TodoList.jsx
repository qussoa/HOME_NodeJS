import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // 임시 데이터를 생성을 해서
  // todoItems 임시데이터를 가지고
  // todoItem 리스트를 생성한 코드
  const todoItems = [
    { text: "오늘할일", checked: false },
    { text: "오늘약속", checked: true },
    { text: "과제", checked: false },
    { text: "숙제", checked: true },
    { text: "Homework", checked: false }
  ];
  /*
    todoItems(배열)
  */
  const todoList = todoItems.map(({ text, checked }) => (
    <TodoItem text={text} checked={checked} />
  ));
  return <div>{todoList}</div>;
};

export default TodoList;
