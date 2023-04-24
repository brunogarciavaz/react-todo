import { createReducer } from '@reduxjs/toolkit';
import { fetchTodos, createTodo, updateTodo, deleteTodo, setTodos, addTodo, editTodo, removeTodo } from './todosActions';

const initialState = { data: [], loading: false, error: null };

const todosReducer = createReducer(initialState, (builder) => {
  builder
    // Fetch todos
    .addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })

    // Create todo
    .addCase(createTodo.fulfilled, (state, action) => {
      state.data.push(action.payload);
    })

    // Update todo
    .addCase(updateTodo.fulfilled, (state, action) => {
      const todoIndex = state.data.findIndex((todo) => todo.id === action.payload.id);
      state.data[todoIndex] = action.payload;
    })

    // Delete todo
    .addCase(deleteTodo.fulfilled, (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    })
});

export default todosReducer;
