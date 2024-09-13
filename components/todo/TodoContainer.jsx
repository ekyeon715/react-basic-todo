import TodoList from "./TodoList";
import TodoDashboard from "./TodoDashboard";
import styled from "styled-components";
import TodoForm from "./TodoForm";

const TodoContainer = () => {
  return (
    <div>
      <TodoContainerWrapper>
        <TodoDashboard />
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
