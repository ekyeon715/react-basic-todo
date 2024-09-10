import { useContext } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import TodoContext from "../TodoContext";
import { useSearchParams } from "react-router-dom";

const TodoList = () => {
  const { todos, completedTodos, pendingTodos } = useContext(TodoContext);
  const [serchParams] = useSearchParams();

  const getfilterdTodos = () => {
    const filter = serchParams.get("filter");

    if (filter === "completed") {
      return completedTodos;
    } else if (filter === "pending") {
      return pendingTodos;
    }
    return todos;
  };
  const filterdTodos = getfilterdTodos();
  return (
    <TaskSection>
      <TaskdHeader>
        <h1>Tasks</h1>
      </TaskdHeader>
      <TaskList>
        {filterdTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
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
