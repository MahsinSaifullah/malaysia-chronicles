export const Form = () => {
  return (
    <form className="flex flex-col min-w-[600px] mt-[32px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-stone-500 rounded-md p-8">
      <label className="text-white max-w-[400px] text-xl tracking-widest font-medium border-b-[1px] pb-2 border-neutral-200">
        What do you want to take?
      </label>
      <div className="mt-[32px] flex gap-4">
        <input
          className="border-none outline-none p-3 bg-[#f7f1f1] rounded-md flex-grow"
          placeholder="New item..."
        />
        <button className="text-white bg-gradient-to-r from-stone-600 to-slate-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-stone-300 dark:focus:ring-slate-800 font-medium rounded-lg px-7 py-2.5 text-center">
          Add
        </button>
      </div>
    </form>
  );
};
