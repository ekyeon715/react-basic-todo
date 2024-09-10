import { createContext, useEffect, useState } from "react";
import todoClient from "../src/api/todoClient";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const { data } = await todoClient.get("/");

    setTodos(data);
  };

  const addTodos = async (newTodoObj) => {
    await todoClient.post("/", newTodoObj);

    fetchTodos();
  };

  const handleUpdate = async (id, completed) => {
    await todoClient.patch(`/${id}`, {
      completed,
    });

    fetchTodos();
  };

  const handleDelete = async (id) => {
    await todoClient.delete(`/${id}`);

    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  });

  const completedTodos = todos.filter((todo) => todo.completed);
  const pendingTodos = todos.filter((todo) => !todo.completed);

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
    <TodoContext.Provider
      value={{
        todos,
        fetchTodos,
        addTodos,
        setTodos,
        handleUpdate,
        handleDelete,
        handleSubmit,
        handleInputChange,
        completedTodos,
        pendingTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
