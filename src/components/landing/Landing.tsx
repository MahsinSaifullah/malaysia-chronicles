import * as React from 'react';
import * as CustomHook from '../../hooks';
import { Link } from 'react-router-dom';
import { Title } from '../shared';

export const Landing = () => {
  const { setTodoType } = CustomHook.useTodo();
  const { allTodoTypes } = CustomHook.useTodoType();

  React.useEffect(() => {
    setTodoType(null);
  }, [setTodoType]);

  return (
    <section className="flex h-[100%] w-[100%] flex-col gap-y-16 justify-center items-center">
      <div className="flex flex-col gap-y-4 items-center">
        <Title />
        <h3 className="text-sm md:text-lg tracking-widest font-light text-white">
          Choose your path:
        </h3>
      </div>
      <div className="grid grid-cols-2 justify-center gap-8">
        {allTodoTypes.map((todoType) => {
          return (
            <Link
              to={`/todo/${todoType.type}`}
              key={todoType.id}
              className="text-sm md:text-lg w-1/2 min-w-[150px] md:min-w-[200px] bg-slate-500 hover:bg-slate-600 text-white py-2 px-4 rounded text-center"
            >
              To {todoType.type}
            </Link>
          );
        })}
      </div>
    </section>
  );
};
