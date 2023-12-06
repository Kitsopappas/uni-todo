import { useCallback, useState } from "react";
import { ITodoEntity } from "../store/interfaces/ITodoEntity";
import { insertTodoEntity } from "../store/asyncActions/todoAsyncActions";
import { useAppDispatch } from "../hooks";

export const TodoInputField = () => {
  const [input, setInput] = useState("");

  const dispatch = useAppDispatch();

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

  return (
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
  );
};
