import * as React from 'react';
import * as ReactRouter from 'react-router-dom';
import * as CustomHook from '../../hooks';
import { Title } from '../shared';
import { Form } from './Form';
import { GoBack } from './GoBack';
import { List } from './List';
import { ClearAll } from './ClearAll';

export const Todo = () => {
  const { typeOfTodo } = ReactRouter.useParams();
  const { setTodoType, todos } = CustomHook.useTodo();

  React.useEffect(() => {
    if (!typeOfTodo) {
      return;
    }

    setTodoType(typeOfTodo);
  }, [typeOfTodo, setTodoType]);

  const filteredTodos = todos.filter((todo) => todo.type === typeOfTodo);

  return (
    <section className="flex flex-col h-[100%] items-center pt-[72px] overflow-scroll pb-10 relative">
      <GoBack />
      <Title />
      <Form />
      {!!filteredTodos.length && <ClearAll />}
      <List />
    </section>
  );
};
