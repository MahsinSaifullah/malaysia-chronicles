import * as React from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { ITodoType } from '../types';
import { db } from '../firebase';

export interface ITodoTypeContext {
  allTodoTypes: ITodoType[];
}

const initialState: ITodoTypeContext = {
  allTodoTypes: [],
};

export const TodoTypeContext =
  React.createContext<ITodoTypeContext>(initialState);

export const TodoTypeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allTodoTypes, setAllTodoTypes] = React.useState<ITodoType[]>([]);

  React.useEffect(
    () =>
      onSnapshot(collection(db, 'todoTypes'), (snapshot) => {
        const remoteTodoTypes = snapshot.docs.map((doc) =>
          doc.data()
        ) as ITodoType[];

        setAllTodoTypes(remoteTodoTypes);
      }),
    []
  );

  return (
    <TodoTypeContext.Provider
      value={{
        allTodoTypes,
      }}
    >
      {children}
    </TodoTypeContext.Provider>
  );
};
