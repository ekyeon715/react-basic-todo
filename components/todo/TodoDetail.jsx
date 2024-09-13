import { useQuery } from "@tanstack/react-query";
import TodoItem from "./TodoItem";
import { getTodoDetail } from "../../src/api/todoClient";

const TodoDetail = ({ id }) => {
  const {
    data: todo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoDetail(id),
  });

  if (isLoading) {
    return <section>Loading...</section>;
  }

  if (error) {
    return <section>Error: {error.message}</section>;
  }

  if (!todo) {
    return <section>404 Not Found Todo!</section>;
  }
  return (
    <section>
      <TodoItem todo={todo} />
    </section>
  );
};

export default TodoDetail;
