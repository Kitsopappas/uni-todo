import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { ITodoEntity } from "./store/interfaces/ITodoEntity";
import {
  deleteTodoEntity,
  getTodoEntities,
  insertTodoEntity,
  updateTodoEntity,
} from "./store/asyncActions/todoAsyncActions";
import { useAppDispatch, useAppSelector } from "./hooks";
import TodoListItem from "./components/TodoListItem";

function App() {
  const { todos } = useAppSelector((state) => state.todoSlice);
  const [input, setInput] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (todos.length === 0) {
      dispatch(getTodoEntities());
    }
  }, [dispatch, todos.length]);

  const addTodoEntity = useCallback(() => {
    const todoEntity: ITodoEntity = {
      name: input,
      done: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    dispatch(insertTodoEntity(todoEntity));
    setInput("");
  }, [input, dispatch]);

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
  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
              ></input>
              <button
                onClick={addTodoEntity}
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
              >
                Add
              </button>
            </div>
          </div>
          <div>
            {todos.map((d, idx) => {
              return (
                <TodoListItem
                  todoItem={d}
                  onCompleteTodo={() => completeTodoEntity(d)}
                  onDeleteTodo={() => removeTodoEntity(d)}
                ></TodoListItem>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
