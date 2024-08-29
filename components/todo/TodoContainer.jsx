import React, { useContext } from "react";
import TodoList from "./TodoList";
import TodoDashboard from "./TodoDashboard";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoContext from "../TodoContext";

const TodoContainer = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <TodoContainerWrapper>
        <TodoDashboard all={todos.length} completed={6} pending={13} />
        <TodoForm />
        <TodoList />
      </TodoContainerWrapper>
    </div>
  );
};

export default TodoContainer;

const TodoContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
