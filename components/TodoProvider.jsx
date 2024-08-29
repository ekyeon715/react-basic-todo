import React, { useState } from "react";
import TodoContext from "./TodoContext";
import { SAMPLE_TODOS } from "../src/SampleData";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [newTodo, setNewTodo] = useState([]);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    setTodos([
      { id: crypto.randomUUID(), text: newTodo, completed: false },
      ...todos,
    ]);
    setNewTodo("");
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
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
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        handleUpdate,
        handleDelete,
        handleSubmit,
        handleInputChange,
        newTodo,
        setNewTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
