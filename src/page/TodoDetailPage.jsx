import { Link } from "react-router-dom";
import TodoDetail from "../../components/todo/TodoDetail";
import styled from "styled-components";

const TodoDetailPage = () => {
  return (
    <div>
      <TodoDetail />

      <Link to="/">
        <TodoListButton>목록으로</TodoListButton>
      </Link>
    </div>
  );
};

export default TodoDetailPage;

const TodoListButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #000000;
  color: #ffffff;
  font-size: 1rem;
  width: 100%;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
