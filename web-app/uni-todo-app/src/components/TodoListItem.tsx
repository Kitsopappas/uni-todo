import { ITodoEntity } from "../store/interfaces/ITodoEntity";

interface ITodoListItemProps {
  todoItem: ITodoEntity;
  onCompleteTodo: () => void;
  onDeleteTodo: () => void;
}

const TodoListItem = ({
  todoItem,
  onCompleteTodo,
  onDeleteTodo,
}: ITodoListItemProps) => {
  return (
    <div data-testid="ta-main-list-todo-element">
      <div className="flex mb-4 items-center">
        {!todoItem.done && (
          <p className="w-full text-grey-darkest">{todoItem.name}</p>
        )}

        {todoItem.done && (
          <p className="w-full line-through text-grey-darkest">
            {todoItem.name}
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
