import * as CustomHook from '../../hooks';
import * as React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { ITodo } from '../../types';
import { TextInput } from '../shared';
import { Draggable } from 'react-beautiful-dnd';

interface ListItemProps {
  todo: ITodo;
  index: number;
}

export const ListItem: React.FC<ListItemProps> = ({ todo, index }) => {
  const [itemBeingEdited, setItemBeingEdited] = React.useState('');
  const [editedItem, setEditedItem] = React.useState(todo.description);
  const { completeTodo, deleteTodo, updateDescription } = CustomHook.useTodo();

  const handleTodoEdit = () => {
    setItemBeingEdited('');
    updateDescription(todo.id, editedItem);
  };

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="min-w-[330px] md:min-w-[400px] w-[50%] p-2 md:p-3 rounded-lg bg-slate-500 text-white flex items-center justify-between"
        >
          <div className="flex max-w-[80%] items-center gap-2">
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
                <TextInput
                  className="text-black max-w-[80%]"
                  value={editedItem}
                  size="large"
                  onChange={(event) => setEditedItem(event.target.value)}
                  placeholder="item..."
                />
              </form>
            )}

            {itemBeingEdited !== todo.id && (
              <h3
                className={`${
                  todo.isComplete ? 'line-through' : ''
                } text-sm md:text-lg`}
              >
                {todo.description}
              </h3>
            )}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <PencilIcon
              onClick={() => {
                if (itemBeingEdited === todo.id) {
                  handleTodoEdit();
                } else {
                  setItemBeingEdited(todo.id);
                }
              }}
              className="h-4 w-4 md:h-5 md:w-5 text-white cursor-pointer"
            />
            <TrashIcon
              onClick={() => deleteTodo(todo.id)}
              className="h-4 w-4 md:h-5 md:w-5 text-red-300 cursor-pointer"
            />
          </div>
        </li>
      )}
    </Draggable>
  );
};
