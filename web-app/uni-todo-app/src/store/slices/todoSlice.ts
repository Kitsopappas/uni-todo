import { createSlice } from "@reduxjs/toolkit";
import {
  deleteTodoEntity,
  getTodoEntities,
  insertTodoEntity,
  updateTodoEntity,
} from "../asyncActions/todoAsyncActions";
import { ITodoEntity } from "../interfaces/ITodoEntity";

interface ITodoEntityState {
  todos: ITodoEntity[];
}

const todoInitialState: ITodoEntityState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(insertTodoEntity.fulfilled, (state, {payload}) => {
      state.todos.push(payload);
    });
    builder.addCase(getTodoEntities.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    builder.addCase(updateTodoEntity.fulfilled, (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.meta.arg.id
      );
      if (todoIndex >= 0) {
        state.todos[todoIndex] = action.meta.arg;
      }
    });
    builder.addCase(deleteTodoEntity.fulfilled, (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.meta.arg.id
      );
      if (todoIndex >= 0) {
        state.todos.splice(todoIndex, 1);
      }
    });
  },
});

export default todoSlice.reducer;
