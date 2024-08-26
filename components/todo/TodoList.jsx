import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoList = ({ todos, handleDelete, handleUpdate }) => {
  return (
    <TaskSection>
      <TaskdHeader>
        <h1>Tasks</h1>
      </TaskdHeader>
      <TaskList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </TaskList>
    </TaskSection>
  );
};

export default TodoList;

const TaskSection = styled.section`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  gap: 1rem;
`;

const TaskdHeader = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
