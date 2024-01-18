import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export const ListItem = () => {
  return (
    <li className="min-w-[400px] w-[50%] p-3 rounded-lg bg-slate-500 text-white flex items-center justify-between">
      <div className="flex items-center gap-2">
        <input type="checkbox" value="" className="w-4 h-4 cursor-pointer" />
        <h3>List item</h3>
      </div>
      <div className="flex items-center gap-4">
        <PencilIcon className="h-5 w-5 text-white cursor-pointer" />
        <TrashIcon className="h-5 w-5 text-red-300 cursor-pointer" />
      </div>
    </li>
  );
};
