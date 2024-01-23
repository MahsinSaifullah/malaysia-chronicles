import * as React from "react";
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { ListItem } from "./ListItem";
import * as ReactRouter from "react-router-dom";
import * as CustomHook from "../../hooks";
import { ITodo } from "../../types";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const reorderTodo = (list: ITodo[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const List = () => {
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const { typeOfTodo } = ReactRouter.useParams();
  const { todos, setTodos } = CustomHook.useTodo();

  if (!typeOfTodo) {
    return null;
  }

  const filteredTodos = todos.filter((todo) => todo.type === typeOfTodo);

  const handleDragEnd: OnDragEndResponder = async (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedTodo = reorderTodo(
      todos,
      result.source.index,
      result.destination.index
    );

    const reorderedTodoWithCorrectedIndex = reorderedTodo.map((todo, index) => {
      return { ...todo, index };
    });

    setTodos(reorderedTodoWithCorrectedIndex);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      for (const todo of reorderedTodoWithCorrectedIndex) {
        await setDoc(doc(db, "tasks", todo.id), todo);
      }
    }, 3000);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="task-list">
        {(provided, snapshot) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-2 md:gap-3 mt-[24px] md:mt-[48px] flex-col w-[100%] items-center"
          >
            {filteredTodos.map((todo, index) => (
              <ListItem key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
