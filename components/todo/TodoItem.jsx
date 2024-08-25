import React from "react";

const TodoItem = ({ todo, handleUpdate, handleDelete }) => {
  return (
    <li key={todo.id}>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
        {todo.completed ? <p>완료됨</p> : <p>진행중</p>}
      </span>
      <button onClick={() => handleUpdate(todo.id)}>
        {todo.completed ? "취소" : "완료"}
      </button>
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
