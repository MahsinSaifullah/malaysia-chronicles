import { Title } from "../shared";
import { Form } from "./Form";
import { List } from "./List";

export const Todo = () => {
  return (
    <section className="flex flex-col h-[100%] items-center pt-[72px] overflow-scroll pb-10">
      <Title />
      <Form />
      <List />
    </section>
  );
};
