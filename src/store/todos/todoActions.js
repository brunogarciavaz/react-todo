import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/todos';

// Async action to fetch todos from the API
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

// Async action to create a new todo
export const createTodo = createAsyncThunk('todos/createTodo', async (todo) => {
  const response = await axios.post(apiUrl, { todo });
  return response.data;
});

// Async action to update a todo
export const updateTodo = createAsyncThunk('todos/updateTodo', async (todo) => {
  const response = await axios.patch(`${apiUrl}/${todo.id}`, { todo });
  return response.data;
});

// Async action to delete a todo
export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (todoId) => {
  await axios.delete(`${apiUrl}/${todoId}`);
  return todoId;
});

export const setTodos = createAction('todos/setTodos');
export const addTodo = createAction('todos/addTodo');
export const editTodo = createAction('todos/editTodo');
export const removeTodo = createAction('todos/removeTodo');