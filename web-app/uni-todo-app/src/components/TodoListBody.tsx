import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { ITodoEntity } from "../store/interfaces/ITodoEntity";
import {
  deleteTodoEntity,
  updateTodoEntity,
} from "../store/asyncActions/todoAsyncActions";
import TodoListItem from "./TodoListItem";

const TodoListBody = () => {
  const { todos } = useAppSelector((state) => state.todoSlice);

  const dispatch = useAppDispatch();

  

  if (todos.length === 0) {
    return <></>;
  }

  return (
    <div data-testid="ta-main-list-todo">
      {todos.map((d: ITodoEntity) => {
        return (
          <TodoListItem
            todoItem={d}
            
          />
        );
      })}
    </div>
  );
};

export default TodoListBody;
