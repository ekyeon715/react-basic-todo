import { useQuery } from "@tanstack/react-query";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { getTodos } from "../../src/api/todoClient";
import { useSearchParams } from "react-router-dom";

const TodoList = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("fiilter");

  const { data, isLoading, error } = useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });

  if (isLoading) {
    return <TaskSection>Loading...</TaskSection>;
  }

  if (error) {
    return <TaskSection>Error: {error.message}</TaskSection>;
  }

  return (
    <TaskSection>
      <TaskdHeader>
        <h1>Tasks</h1>
      </TaskdHeader>
      <TaskList>
        {data.map((todo) => (
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
