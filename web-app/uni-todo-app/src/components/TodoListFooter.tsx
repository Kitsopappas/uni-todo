import { useMemo } from "react";
import { useAppSelector } from "../hooks";

export const TodoListFooter = () => {
  const { todos } = useAppSelector((state) => state.todoSlice);


  const { doneTask, pendingTasks } = useMemo(() => {
    let doneTask = 0;
    let pendingTasks = 0;
    todos.forEach(({ done }) => (done ? doneTask++ : pendingTasks++));

    return { doneTask, pendingTasks };
  }, [todos]);

  return (
    <div className="flex justify-between w-full lg:w-3/4 lg:max-w-lg border p-2 flex  text-xs bg-white rounded">
      <div className="me-2">{`Done: ${doneTask}`}</div>
      <div className="me-2">{`Pending: ${pendingTasks}`}</div>
      <div>{`All: ${todos.length}`}</div>
    </div>
  );
};
