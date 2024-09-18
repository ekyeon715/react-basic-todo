import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../../src/hooks/useTodoMutation";

const TodoItem = ({ todo }) => {
  const navigate = useNavigate();

  const { mutateAsync: handleDelete, isPending } = useDeleteTodoMutation();
  const { mutate: handleUpdate } = useUpdateTodoMutation();

  return (
    <TaskItem key={todo.id}>
      <TaskItemContent>
        <p
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          <TaskLink to={`/${todo.id}`}>{todo.text}</TaskLink> -{" "}
          {todo.completed ? <span>완료됨</span> : <span>진행중</span>}
        </p>
      </TaskItemContent>

      <TaskItemActions>
        <TaskItemActionButton
          onClick={() =>
            handleUpdate({
              id: todo.id,
              completed: !todo.completed,
            })
          }
          color="#582be7"
        >
          {todo.completed ? "취소" : "완료"}
        </TaskItemActionButton>
        <TaskItemActionButton
          onClick={async () => {
            await handleDelete(todo.id);
            navigate("/");
          }}
          color="#f05656"
        >
          {isPending ? "삭제 중" : "삭제"}
        </TaskItemActionButton>
      </TaskItemActions>
    </TaskItem>
  );
};

export default TodoItem;

const TaskItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  background-color: #ffffff;
  border-radius: 1rem;
`;

const TaskItemContent = styled.div``;

const TaskItemActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const TaskItemActionButton = styled.button`
  color: #ffffff;
  background-color: ${({ color }) => color};

  padding: 0.25rem 0.55rem;
  border-radius: 0.5rem;

  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;

const TaskLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
