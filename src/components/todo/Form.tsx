import * as React from "react";
import * as CustomHook from "../../hooks";
import { TextInput } from "../shared";

export const Form = () => {
  const [item, setItem] = React.useState("");
  const { todoType, addTodo } = CustomHook.useTodo();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!item) {
      return;
    }

    setItem("");
    addTodo(item);
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col w-[40%] min-w-[300px] md:min-w-[400px] mt-[32px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-stone-500 rounded-md p-8"
    >
      {todoType && (
        <label className="text-white max-w-[400px] text-sm md:text-xl tracking-widest font-medium border-b-[1px] pb-2 border-neutral-200">
          What do you want to {todoType}
        </label>
      )}

      <div className="mt-[32px] flex gap-4 w-[100%]">
        <TextInput
          value={item}
          size="large"
          onChange={(event) => setItem(event.target.value)}
          placeholder="New item..."
        />
        <button className="text-sm md:text-lg text-white bg-gradient-to-r from-stone-600 to-slate-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-stone-300 dark:focus:ring-slate-800 font-medium rounded-lg px-5 py-1 md:px-7 md:py-2.5 text-center">
          Add
        </button>
      </div>
    </form>
  );
};
