import { ListItem } from "./ListItem";
import * as ReactRouter from "react-router-dom";
import * as CustomHook from "../../hooks";

export const List = () => {
  const { typeOfTodo } = ReactRouter.useParams();
  const { takeTodos, bringTodos } = CustomHook.useTodo();
  return (
    <ul className="flex gap-3 mt-[48px] flex-col w-[100%] items-center">
      {typeOfTodo === "take" && (
        <>
          {takeTodos.map((todo) => (
            <ListItem key={todo.id} todo={todo} />
          ))}
        </>
      )}
      {typeOfTodo === "bring" && (
        <>
          {bringTodos.map((todo) => (
            <ListItem key={todo.id} todo={todo} />
          ))}
        </>
      )}
    </ul>
  );
};
