import { ListItem } from "./ListItem";
import * as ReactRouter from "react-router-dom";
import * as CustomHook from "../../hooks";

export const List = () => {
  const { typeOfTodo } = ReactRouter.useParams();
  const { todos } = CustomHook.useTodo();

  if (!typeOfTodo) {
    return null;
  }

  const filteredTodos = todos.filter((todo) => todo.type === typeOfTodo);

  return (
    <ul className="flex gap-2 md:gap-3 mt-[24px] md:mt-[48px] flex-col w-[100%] items-center">
      {filteredTodos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
