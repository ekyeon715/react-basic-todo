import { useContext } from "react";
import TodoContext from "../TodoContext";

const TodoForm = () => {
  const { handleSubmit, handleInputChange, newTodo } = useContext(TodoContext);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleInputChange}
        value={newTodo}
        placeholder="todo 내용을 입력해주세요"
      />
      <button type="submit">todo추가</button>
    </form>
  );
};

export default TodoForm;
