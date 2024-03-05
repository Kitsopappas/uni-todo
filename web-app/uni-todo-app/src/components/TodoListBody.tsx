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

  const completeTodoEntity = useCallback(
    (todoEntity: ITodoEntity) => {
      dispatch(
        updateTodoEntity({
          id: todoEntity.id,
          done: true,
          updatedAt: new Date().toISOString(),
          name: todoEntity.name,
          createdAt: todoEntity.createdAt,
        })
      );
    },
    [dispatch]
  );

  const removeTodoEntity = useCallback(
    (todoEntity: ITodoEntity) => {
      dispatch(deleteTodoEntity(todoEntity));
    },
    [dispatch]
  );

  if (todos.length === 0) {
    return <></>;
  }

  return (
    <div data-testid="ta-main-list-todo">
      {todos.map((d: ITodoEntity) => {
        return (
          <TodoListItem
            todoItem={d}
            onCompleteTodo={() => completeTodoEntity(d)}
            onDeleteTodo={() => removeTodoEntity(d)}
          />
        );
      })}
    </div>
  );
};

export default TodoListBody;
