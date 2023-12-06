import { TodoInputField } from "./TodoInputField";

export const TodoListHeader = () => {
  return (
    <div className="mb-4">
      <h1 className="text-grey-darkest">Todo List</h1>
      <TodoInputField />
    </div>
  );
};

export default TodoListHeader;
