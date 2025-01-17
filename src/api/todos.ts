import { Todo } from '../types/TodoItem';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const addTodo = (userId: number, todo:Todo) => {
  return client.post<Todo>(`/todos?userId=${userId}`, todo);
};

export const deleteTodos = (todoIds: number[]) => {
  const deleteRequests = todoIds.map(todoId => client.delete(`/todos/${todoId}`));

  return Promise.all(deleteRequests);
};
