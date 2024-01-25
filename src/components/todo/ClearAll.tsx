import * as CustomHook from "../../hooks";

export const ClearAll = () => {
  const { clearAll } = CustomHook.useTodo();

  return (
    <button
      onClick={() => clearAll()}
      className="mt-[24px] md:mt-[32px] text-white text-sm md:text-lg"
    >
      Clear All
    </button>
  );
};
