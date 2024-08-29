import React, { createContext, useState } from "react";
import { SAMPLE_TODOS } from "../../src/SampleData";
import TodoList from "./TodoList";
import TodoDashboard from "./TodoDashboard";
import styled from "styled-components";
import TodoForm from "./TodoForm";

export const TodoContext = createContext();

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
      <TodoContext.Provider
        value={{ todos, setTodos, handleUpdate, handleDelete }}
      >
        <TodoContainerWrapper>
          <TodoDashboard all={todos.length} completed={6} pending={13} />
          <TodoForm />
          <TodoList />
        </TodoContainerWrapper>
      </TodoContext.Provider>
    </div>
  );
};

export default TodoContainer;

const TodoContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
