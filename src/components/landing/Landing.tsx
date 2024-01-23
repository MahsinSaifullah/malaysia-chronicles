import * as React from "react";
import * as CustomHook from "../../hooks";
import { Link } from "react-router-dom";
import { Title } from "../shared";

export const Landing = () => {
  const { setTodoType } = CustomHook.useTodo();

  React.useEffect(() => {
    setTodoType(null);
  }, []);

  return (
    <section className="flex h-[100%] w-[100%] flex-col gap-y-16 justify-center items-center">
      <div className="flex flex-col gap-y-4 items-center">
        <Title />
        <h3 className="text-sm md:text-lg tracking-widest font-light text-white">
          Choose your path:
        </h3>
      </div>
      <div className="flex justify-center w-1/2 gap-x-8">
        <Link
          to="/todo/take"
          className="text-sm md:text-lg w-1/2 max-w-[300px] min-w-[150px] bg-slate-500 hover:bg-slate-600 text-white  py-2 px-4 rounded text-center"
        >
          To Take
        </Link>
        <Link
          to="/todo/bring"
          className="text-sm md:text-lg w-1/2 max-w-[300px] min-w-[150px] bg-slate-500 hover:bg-slate-600 text-white  py-2 px-4 rounded text-center"
        >
          To Bring
        </Link>
      </div>
    </section>
  );
};
