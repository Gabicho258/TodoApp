import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { todo } from "../api/index.js";
const { getTodosByUser, createTodo, deleteTodo, updateTodo } = todo;
const initialState = {};

export const getTodosByUserAsync = createAsyncThunk(
  "todo/getByUser",
  async (id) => {
    const response = await getTodosByUser(id);
    return response.data;
  }
);

export const createTodoAsync = createAsyncThunk(
  "todo/create",
  async ({ todo, id }) => {
    console.log("todo", todo);
    console.log("id", id);
    const response = await createTodo(todo, id);
    return response;
  }
);

export const deleteTodoAsync = createAsyncThunk("todo/delete", async (id) => {
  const response = await deleteTodo(id);
  return response;
});

export const updateTodoAsync = createAsyncThunk("todo/update", async (todo) => {
  const response = await updateTodo(todo);
  return response;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodosByUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodosByUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(createTodoAsync.fulfilled, (state, action) => {
        state.created = action.payload;
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.deleted = action.payload;
      });
  },
});
export const todosByUser = (state) => state.todo.todos;
export default todoSlice.reducer;
