import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITodoEntity } from "../interfaces/ITodoEntity";
import { env } from "../../env/env";

export const insertTodoEntity = createAsyncThunk(
  "todo/insertTodoEntity",
  async (todoEntity: ITodoEntity) => {
    const result = await axios.post(`${env.webApi}/InsertTodo`, todoEntity);
    return result.data;
  }
);

export const getTodoEntities = createAsyncThunk(
  "todo/getTodoEntities",
  async (_arg) => {
    const result = await axios.get(`${env.webApi}//GetTodo`);
    return result.data;
  }
);

export const updateTodoEntity = createAsyncThunk(
  "todo/updateTodoEntity",
  async (todoEntity: ITodoEntity) => {
    const result = await axios.patch(`${env.webApi}/UpdateTodo`, todoEntity);
    return result.data;
  }
);

export const deleteTodoEntity = createAsyncThunk(
  "todo/deleteTodoEntity",
  async (todoEntity: ITodoEntity) => {
    const result = await axios.delete(
      `${env.webApi}/DeleteTodo/${todoEntity.id}`
    );
    return result.data;
  }
);
