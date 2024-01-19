import { Title } from "../shared";
import { Form } from "./Form";
import { GoBack } from "./GoBack";
import { List } from "./List";

export const Todo = () => {
  return (
    <section className="flex flex-col h-[100%] items-center pt-[72px] overflow-scroll pb-10 relative">
      <GoBack />
      <Title />
      <Form />
      <List />
    </section>
  );
};
