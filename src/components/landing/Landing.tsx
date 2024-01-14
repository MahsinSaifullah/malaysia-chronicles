import { Title } from '../shared';

export const Landing = () => {
  return (
    <section className="flex h-[100%] w-[100%] flex-col gap-y-16 justify-center items-center">
      <div className="flex flex-col gap-y-4 items-center">
        <Title />
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
    </section>
  );
};
