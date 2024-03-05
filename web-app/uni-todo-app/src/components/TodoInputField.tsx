import { useCallback, useState } from "react";
import { ITodoEntity } from "../store/interfaces/ITodoEntity";
import { insertTodoEntity } from "../store/asyncActions/todoAsyncActions";
import { useAppDispatch } from "../hooks";
import { AlertWindow } from "./AlertWindow";

export const TodoInputField = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();

  const addTodoEntity = useCallback(() => {
    if(!input.trim()) {
      setError("TODOs cannot be empty!");
      return;
    }
    
    const todoEntity: ITodoEntity = {
      name: input,
      done: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    dispatch(insertTodoEntity(todoEntity));
    setInput("");
    setError("");
  }, [input, dispatch]);

  return (
    <div>
      {error && <AlertWindow message={error} />}
      <div className="flex mt-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if(e.key === "Enter") {
              addTodoEntity();
            }
          }}
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
          data-testid="ta-main-input-todo"
          ></input>
        <button
          onClick={addTodoEntity}
          data-testid="ta-main-button-todo"
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
          >
          Add
        </button>
      </div>
    </div>
  );
};
