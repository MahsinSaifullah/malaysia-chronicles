import { ListItem } from './ListItem';

export const List = () => {
  return (
    <ul className="flex gap-3 mt-[48px] flex-col w-[100%] items-center">
      <ListItem />
      <ListItem />
      <ListItem />
    </ul>
  );
};
