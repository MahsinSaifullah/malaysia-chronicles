import * as React from "react";
import * as ReactRouter from "react-router-dom";
import * as CustomHook from "../../hooks";
import { ITodo, ITodoType } from "../../types";
import { Title } from "../shared";
import { Form } from "./Form";
import { GoBack } from "./GoBack";
import { List } from "./List";
import { ClearAll } from "./ClearAll";

const showClearAll = (
  typeOfTodo: string | undefined,
  takeTodo: ITodo[],
  bringTodo: ITodo[]
) => {
  if (!typeOfTodo) {
    return false;
  }

  if (!takeTodo.length && !bringTodo.length) {
    return false;
  }

  if (typeOfTodo === "take" && !takeTodo.length) {
    return false;
  }

  if (typeOfTodo === "bring" && !bringTodo.length) {
    return false;
  }

  return true;
};

export const Todo = () => {
  const navigate = ReactRouter.useNavigate();
  const { typeOfTodo } = ReactRouter.useParams();
  const { setTodoType, todos } = CustomHook.useTodo();

  React.useEffect(() => {
    if (typeOfTodo !== "take" && typeOfTodo !== "bring") {
      navigate("/");
    }

    setTodoType(typeOfTodo as ITodoType);
  }, [typeOfTodo]); // eslint-disable-line react-hooks/exhaustive-deps

  const takeTodos = todos.filter((todo) => todo.type === "take");
  const bringTodos = todos.filter((todo) => todo.type === "bring");

  return (
    <section className="flex flex-col h-[100%] items-center pt-[72px] overflow-scroll pb-10 relative">
      <GoBack />
      <Title />
      <Form />
      {showClearAll(typeOfTodo, takeTodos, bringTodos) && <ClearAll />}
      <List />
    </section>
  );
};
