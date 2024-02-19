import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { ITodoType } from '../types';
import { db } from '../firebase';

export interface ITodoTypeContext {
  allTodoTypes: ITodoType[];
  addTodoType: (newItem: string) => void;
}

const initialState: ITodoTypeContext = {
  allTodoTypes: [],
  addTodoType: () => {},
};

export const TodoTypeContext =
  React.createContext<ITodoTypeContext>(initialState);

export const TodoTypeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allTodoTypes, setAllTodoTypes] = React.useState<ITodoType[]>([]);

  const addTodoType = async (newItem: string) => {
    const newTodoType: ITodoType = {
      id: uuidv4(),
      type: newItem,
    };

    await setDoc(doc(db, 'todoTypes', newTodoType.id), newTodoType);
  };

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
        addTodoType,
      }}
    >
      {children}
    </TodoTypeContext.Provider>
  );
};
