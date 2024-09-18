import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, postTodo, updateTodo } from "../api/todoClient";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todo) => postTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClieent = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      queryClieent.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

export const useUpdateTodoMutation = () => {
  const queryClieent = useQueryClient();

  return useMutation({
    mutationFn: ({ id, completed }) => updateTodo(id, completed),
    onSuccess: () => {
      queryClieent.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
