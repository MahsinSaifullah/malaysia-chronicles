import * as React from "react";
import * as CustomHook from "../../hooks";

export const Form = () => {
  const [item, setItem] = React.useState("");
  const { todoType } = CustomHook.useTodo();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col w-[40%] min-w-[400px] mt-[32px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-stone-500 rounded-md p-8"
    >
      {todoType && (
        <label className="text-white max-w-[400px] text-xl tracking-widest font-medium border-b-[1px] pb-2 border-neutral-200">
          What do you want to {todoType}
        </label>
      )}

      <div className="mt-[32px] flex gap-4">
        <input
          value={item}
          onChange={(event) => setItem(event.target.value)}
          className="border-none outline-none p-3 bg-[#f7f1f1] rounded-md flex-grow shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          placeholder="New item..."
        />
        <button className="text-white bg-gradient-to-r from-stone-600 to-slate-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-stone-300 dark:focus:ring-slate-800 font-medium rounded-lg px-7 py-2.5 text-center">
          Add
        </button>
      </div>
    </form>
  );
};
