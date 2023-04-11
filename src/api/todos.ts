import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addTodo = (userId: number, data: any) => {
  return client.post<Todo[]>(`/todos?userId=${userId}`, data);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateTodo = (userId: number, id: number, data: any) => {
  return client.patch(`/todos?userId=${userId}/${id}`, data);
};

export const deleteTodo = (userId: number, id: number) => {
  return client.delete(`/todos?userId=${userId}/${id}`);
};