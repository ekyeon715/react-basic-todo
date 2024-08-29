import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContainer";

const TodoForm = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    setTodos([
      { id: crypto.randomUUID(), text: newTodo, completed: false },
      ...todos,
    ]);
    setNewTodo("");
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

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
