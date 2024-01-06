import { useCallback } from "react";
import { useAppSelector } from "../hooks";

export const TodoListFooter = () => {
  const { todos } = useAppSelector((state) => state.todoSlice);

  const getTasksCount = useCallback(() => {
    let doneTask = 0;
    let pendingTasks = 0;
    todos.forEach(({ done }) => (done ? doneTask++ : pendingTasks++));

    return { doneTask, pendingTasks };
  }, [todos]);

  const { doneTask, pendingTasks } = getTasksCount();

  return (
    <div className="flex justify-between w-full lg:w-3/4 lg:max-w-lg border p-2 flex  text-xs">
      <div className="me-2">{`Done: ${doneTask}`}</div>
      <div className="me-2">{`Pending: ${pendingTasks}`}</div>
      <div>{`All: ${todos.length}`}</div>
    </div>
  );
};
