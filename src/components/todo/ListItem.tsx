import * as CustomHook from "../../hooks";
import * as React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { ITodo } from "../../types";

interface ListItemProps {
  todo: ITodo;
}

export const ListItem: React.FC<ListItemProps> = ({ todo }) => {
  const [itemBeingEdited, setItemBeingEdited] = React.useState("");
  const [editedItem, setEditedItem] = React.useState(todo.desription);
  const { completeTodo, deleteTodo, updateTodo } = CustomHook.useTodo();

  const handleTodoEdit = () => {
    setItemBeingEdited("");
    updateTodo(todo.id, editedItem);
  };

  return (
    <li className="min-w-[400px] w-[50%] p-3 rounded-lg bg-slate-500 text-white flex items-center justify-between">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.isComplete}
          className="w-4 h-4 cursor-pointer"
          onChange={() => {
            completeTodo(todo.id);
          }}
        />
        {itemBeingEdited === todo.id && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleTodoEdit();
            }}
          >
            <input
              value={editedItem}
              onChange={(event) => setEditedItem(event.target.value)}
              className="border-none outline-none p-1 bg-[#f7f1f1] rounded-md flex-grow shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] text-black"
              placeholder="item..."
            />
          </form>
        )}

        {itemBeingEdited !== todo.id && (
          <h3 className={`${todo.isComplete ? "line-through" : ""}`}>
            {todo.desription}
          </h3>
        )}
      </div>
      <div className="flex items-center gap-4">
        <PencilIcon
          onClick={() => {
            if (itemBeingEdited === todo.id) {
              handleTodoEdit();
            } else {
              setItemBeingEdited(todo.id);
            }
          }}
          className="h-5 w-5 text-white cursor-pointer"
        />
        <TrashIcon
          onClick={() => deleteTodo(todo.id)}
          className="h-5 w-5 text-red-300 cursor-pointer"
        />
      </div>
    </li>
  );
};
