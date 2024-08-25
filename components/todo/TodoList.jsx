import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleDelete, handleUpdate }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
