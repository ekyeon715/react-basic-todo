import React, { useState } from "react";
import { SAMPLE_TODOS } from "../../src/SampleData";
import TodoForm from "./TodoForm";

const TodoContainer = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const handleUpdate = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    setTodos(updateTodos);
  };

  const handleDelete = (id) => {
    const deletedtodos = todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setTodos(deletedtodos);
  };

  return (
    <div>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
              {todo.completed ? <p>완료됨</p> : <p>진행중</p>}
            </p>
            <button onClick={() => handleUpdate(todo.id)}>
              {todo.completed ? "취소" : "완료"}
            </button>
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoContainer;
