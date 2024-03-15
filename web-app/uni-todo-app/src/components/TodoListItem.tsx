import { ITodoEntity } from "../store/interfaces/ITodoEntity";
import {
  deleteTodoEntity,
  updateTodoEntity,
} from "../store/asyncActions/todoAsyncActions";
import { useAppDispatch, useAppSelector } from "../hooks";
import {DateTime} from 'luxon';
import { useMemo, useCallback } from 'react';

interface ITodoListItemProps {
  todoItem: ITodoEntity;
}

const formatDateTime = (date : string) : string => {
  return DateTime.fromISO(date).toString();
}

const useCalculateDaysAgo = (date : string) => {
  const updatedAt = useMemo( () => 
    DateTime.fromISO(date) 
    ,[date]
    );
  const calculateDaysAgo = useCallback( () => {
    const currentDate = DateTime.now();
    const daysDifference = currentDate.diff(updatedAt).as("days");
    return Math.floor(daysDifference).toString();
    },
    [updatedAt]
    );
    return calculateDaysAgo();
}

const useTodoListItem = (todoItem : ITodoEntity) => {
  const dispatch = useAppDispatch();
  const onComplete = useCallback(
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
    [dispatch,todoItem]
  );
  const onDelete = useCallback(
    (todoEntity: ITodoEntity) => {
      dispatch(deleteTodoEntity(todoEntity));
    },
    [dispatch,todoItem]
  );
  return {onComplete,onDelete};
}

const TodoListItem = ({
  todoItem,
}: ITodoListItemProps) => {

  const daysAgo = useCalculateDaysAgo(todoItem.updatedAt);
  const {onComplete,onDelete} = useTodoListItem(todoItem);

  return (
    <div data-testid="ta-main-list-todo-element">
      <div className="flex mb-4 items-center">
        {!todoItem.done && (
          <div className="w-full text-grey-darkest relative group">
            <p className="w-full text-grey-darkest">{todoItem.name}</p>
            <p className="group-hover:text-gray-500 text-sm">{daysAgo} days ago</p>
          </div>
        )}

        {todoItem.done && (
          <div className="w-full text-grey-darkest relative group">
            <p className="w-full line-through text-grey-darkest">{todoItem.name}</p>
            <p className="group-hover:text-gray-500 text-sm">{daysAgo} days ago</p>
          </div>
        )}

        <button
          onClick={() => onComplete(todoItem)}
          className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
        >
          ✅
        </button>

        <button
          onClick={() => onDelete(todoItem)}
          data-testid="ta-main-list-delete-button"
          className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
