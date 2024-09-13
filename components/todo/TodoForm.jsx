import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTodo } from "../../src/api/todoClient";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const queryClieent = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (todo) => postTodo(todo),
    onSuccess: () => {
      queryClieent.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const newTodoObj = {
    text: newTodo,
    completed: false,
  };

  mutate(newTodoObj);

  setNewTodo("");

  return (
    <form>
      <input
        type="text"
        value={newTodo}
        placeholder="todo 내용을 입력해주세요"
      />
      <button type="submit">todo추가</button>
    </form>
  );
};

export default TodoForm;
