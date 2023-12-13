import { ITodoEntity } from "../store/interfaces/ITodoEntity";
import { DateTime } from 'luxon';
import { useCallback, useMemo } from 'react';
import {useDispatch} from "react-redux";
import {deleteTodoEntity, updateTodoEntity} from "../store/asyncActions/todoAsyncActions";
import {AnyAction} from "@reduxjs/toolkit";
import {useAppDispatch} from "../hooks";

interface ITodoListItemProps {
  todoItem: ITodoEntity;
  onCompleteTodo: () => void;
  onDeleteTodo: () => void;
}
const formatDateTime = (date: string): string => {
  return DateTime.fromISO(date).toLocaleString();
};

const useCalculateDaysAgo = (date: string) => {
  
  const updatedAt = useMemo(() => DateTime.fromISO(date), [date]);

  const calculateDaysAgo = useCallback(() => {
    const currentDate = DateTime.now();
    return Math.floor(currentDate.diff(updatedAt, 'days').days).toString();
  }, [updatedAt]);

  return calculateDaysAgo();
};

const useTodoListItem = (todoItem: ITodoEntity) => {
  
  const daysAgo = useCalculateDaysAgo(todoItem.updatedAt);
  const dispatch = useAppDispatch();

  const onComplete = useCallback(() => {
    const updatedTodo = {
      ...todoItem,
      done: true
    };
    dispatch(updateTodoEntity(updatedTodo));
  }, [dispatch, todoItem] );

  const onDelete = useCallback(() => {
    dispatch(deleteTodoEntity(todoItem));
  }, [dispatch , todoItem]);

  return { daysAgo, onComplete, onDelete };
};

const TodoListItem = ({
  todoItem,
}: ITodoListItemProps) => {
  const { daysAgo, onComplete , onDelete } = useTodoListItem(todoItem);

  return (
    <>
      <div className="flex mb-4 items-center">
        {!todoItem.done && (
          <p className="w-full text-grey-darkest">{todoItem.name}
          
          <div className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-gray-500 hover:bg-red">
            <p><span className="text-xs">Created on {formatDateTime(todoItem.createdAt)}</span></p>
            <span className="text-xs">Last update: {daysAgo} Days ago</span>
          </div>
          </p>
        )}

        {todoItem.done && (
          <p className="w-full line-through text-grey-darkest">
            {todoItem.name}
            <div className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-gray-500 hover:bg-red">
            <p><span className="text-xs">Created on {formatDateTime(todoItem.createdAt)}</span></p>
            <span className="text-xs">Last update: {daysAgo} Days ago</span>
          </div>
          </p>
        )}

        <button
          onClick={onComplete}
          className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
        >
          ✅
        </button>

        <button
          onClick={onDelete}
          className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
        >
          🗑️
        </button>
      </div>
    </>
  );
};

export default TodoListItem;
