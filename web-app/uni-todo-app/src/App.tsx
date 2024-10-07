import { useEffect } from "react";
import "./App.css";
import { getTodoEntities } from "./store/asyncActions/todoAsyncActions";
import { useAppDispatch, useAppSelector } from "./hooks";
import TodoListBody from "./components/TodoListBody";
import TodoListHeader from "./components/TodoListHeader";
import { TodoListFooter } from "./components/TodoListFooter";

function App() {
  const { todos } = useAppSelector((state) => state.todoSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (todos.length === 0) {
      dispatch(getTodoEntities());
    }
  }, [dispatch, todos.length]);

  return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-teal-lightest font-sans bg-gray-100">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <TodoListHeader />
          <TodoListBody />
        </div>
        <TodoListFooter />
      </div>
  );
}

export default App;
