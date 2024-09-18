import { useState } from "react";
import { useCreateTodoMutation } from "../../src/hooks/useTodoMutation";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const { mutate } = useCreateTodoMutation();

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
