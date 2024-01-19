import { Link } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

export const GoBack = () => {
  return (
    <Link
      to="/"
      className="w-[40%] flex justify-end mb-6 text-white items-center gap-1"
    >
      <ArrowLeftCircleIcon className="h-5 w-5 text-white cursor-pointer" />
      Back
    </Link>
  );
};
