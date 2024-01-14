import { Title } from '../shared';
import { Form } from './Form';

export const Todo = () => {
  return (
    <section className="flex flex-col h-[100%] items-center pt-[72px]">
      <Title />
      <Form />
    </section>
  );
};
