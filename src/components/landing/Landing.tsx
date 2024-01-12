import React from "react";

export const Landing = () => {
  return (
    <main className="flex justify-center items-center h-screen flex-col gap-y-16 bg-gradient-to-r from-stone-600 to-slate-900">
      <div className="flex flex-col gap-y-4 items-center">
        <h1 className="text-xl lg:text-4xl font-bold tracking-widest text-white">
          ✈️ MALAYSIA CHRONICLES ✈️
        </h1>
        <h3 className="text-sm lg:text-lg tracking-widest font-light text-white">
          Choose your path:
        </h3>
      </div>
      <div className="flex justify-center w-1/2 gap-x-8">
        <button className="text-sm lg:text-lg w-1/2 max-w-[300px] min-w-[100px] bg-slate-500 hover:bg-slate-600 text-white  py-2 px-4 rounded">
          To Take
        </button>
        <button className="text-sm lg:text-lg w-1/2 max-w-[300px] min-w-[100px] bg-slate-500 hover:bg-slate-600 text-white  py-2 px-4 rounded">
          To Bring
        </button>
      </div>
    </main>
  );
};
