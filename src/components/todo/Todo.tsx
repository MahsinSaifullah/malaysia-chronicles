import * as React from "react";
import * as ReactRouter from "react-router-dom";
import * as CustomHook from "../../hooks";
import { ITodoType } from "../../types";
import { Title } from "../shared";
import { Form } from "./Form";
import { GoBack } from "./GoBack";
import { List } from "./List";

export const Todo = () => {
  const navigate = ReactRouter.useNavigate();
  const { typeOfTodo } = ReactRouter.useParams();
  const { setTodoType } = CustomHook.useTodo();

  React.useEffect(() => {
    if (typeOfTodo !== "take" && typeOfTodo !== "bring") {
      navigate("/");
    }

    setTodoType(typeOfTodo as ITodoType);
  }, [typeOfTodo]);

  return (
    <section className="flex flex-col h-[100%] items-center pt-[72px] overflow-scroll pb-10 relative">
      <GoBack />
      <Title />
      <Form />
      <List />
    </section>
  );
};
