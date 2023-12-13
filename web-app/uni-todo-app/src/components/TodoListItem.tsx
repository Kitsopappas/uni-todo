import { ITodoEntity } from "../store/interfaces/ITodoEntity";
import { DateTime } from 'luxon';


interface ITodoListItemProps {
  todoItem: ITodoEntity;
  onCompleteTodo: () => void;
  onDeleteTodo: () => void;
}
const formatDateTime = (date: string): string => {
  return DateTime.fromISO(date).toLocaleString();
};

const calculateDaysAgo = (date: string): string => {
  const updatedAt = DateTime.fromISO(date);
  const currentDate = DateTime.now();
  const daysAgo = Math.floor(currentDate.diff(updatedAt, 'days').days);
return daysAgo.toString();
};

const TodoListItem = ({
  todoItem,
  onCompleteTodo,
  onDeleteTodo,
}: ITodoListItemProps) => {
  return (
    <>
      <div className="flex mb-4 items-center">
        {!todoItem.done && (
          <p className="w-full text-grey-darkest">{todoItem.name}
          
          <div className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-gray-500 hover:bg-red">
            <p><span className="text-xs">Created on {formatDateTime(todoItem.createdAt)}</span></p>
            <span className="text-xs">Last update: {calculateDaysAgo(todoItem.updatedAt)} Days ago</span>
          </div>
          </p>
        )}

        {todoItem.done && (
          <p className="w-full line-through text-grey-darkest">
            {todoItem.name}
            <div className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-gray-500 hover:bg-red">
            <p><span className="text-xs">Created on {formatDateTime(todoItem.createdAt)}</span></p>
            <span className="text-xs">Last update: {calculateDaysAgo(todoItem.updatedAt)} Days ago</span>
          </div>
          </p>
        )}

        <button
          onClick={() => onCompleteTodo()}
          className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
        >
          ✅
        </button>

        <button
          onClick={() => onDeleteTodo()}
          className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
        >
          🗑️
        </button>
      </div>
    </>
  );
};

export default TodoListItem;
