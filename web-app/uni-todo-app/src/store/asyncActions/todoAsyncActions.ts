import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITodoEntity } from "../interfaces/ITodoEntity";
import { env } from "../../env/env";

const BASE_PATH = env.springApi; // change to env.webApi for .net C# app

export const insertTodoEntity = createAsyncThunk(
  "todo/insertTodoEntity",
  async (todoEntity: ITodoEntity) => {
    const result = await axios.post(`${BASE_PATH}/todo`, todoEntity);
    return result.data;
  }
);

export const getTodoEntities = createAsyncThunk(
  "todo/getTodoEntities",
  async (_arg) => {
    const result = await axios.get(`${BASE_PATH}/todo`);
    return result.data;
  }
);

export const updateTodoEntity = createAsyncThunk(
  "todo/updateTodoEntity",
  async (todoEntity: ITodoEntity) => {
    const result = await axios.patch(`${BASE_PATH}/todo`, todoEntity);
    return result.data;
  }
);

export const deleteTodoEntity = createAsyncThunk(
  "todo/deleteTodoEntity",
  async (todoEntity: ITodoEntity) => {
    const result = await axios.delete(
      `${BASE_PATH}/todo/${todoEntity.id}`
    );
    return result.data;
  }
);
