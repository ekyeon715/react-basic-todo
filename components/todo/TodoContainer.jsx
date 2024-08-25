import React, { useState } from "react";
import { SAMPLE_TODOS } from "../../src/SampleData";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

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
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TodoContainer;
