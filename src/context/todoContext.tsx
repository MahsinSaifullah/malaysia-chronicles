import * as React from "react";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { ITodo, ITodoType } from "../types";
import { db } from "../firebase";

export interface ITodoContext {
  todoType: ITodoType | null;
  todos: ITodo[];
  addTodo: (newItem: string) => void;
  updateDescription: (id: string, description: string) => void;
  deleteTodo: (id: string) => void;
  completeTodo: (id: string) => void;
  clearAll: () => void;
  setTodoType: React.Dispatch<React.SetStateAction<ITodoType | null>>;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const initialState: ITodoContext = {
  todoType: null,
  todos: [],
  addTodo: () => {},
  updateDescription: () => {},
  deleteTodo: () => {},
  completeTodo: () => {},
  clearAll: () => {},
  setTodoType: () => {},
  setTodos: () => {},
};

export const TodoContext = React.createContext<ITodoContext>(initialState);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todoType, setTodoType] = React.useState<ITodoType | null>(null);
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const addTodo = async (newItem: string) => {
    if (!todoType) {
      return;
    }

    const newTodo: ITodo = {
      id: uuidv4(),
      description: newItem,
      isComplete: false,
      type: todoType,
      index: todos.length > 0 ? todos.length : 0,
    };

    await setDoc(doc(db, "tasks", newTodo.id), newTodo);
  };

  const updateDescription = async (id: string, description: string) => {
    const foundTodo = todos.find((todo) => todo.id === id);

    if (!foundTodo) {
      return;
    }

    const updatedTodo = { ...foundTodo, description };
    await setDoc(doc(db, "tasks", id), updatedTodo);
  };

  const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  const completeTodo = async (id: string) => {
    const foundTodo = todos.find((todo) => todo.id === id);

    if (!foundTodo) {
      return;
    }

    const updatedTodo = { ...foundTodo, isComplete: !foundTodo.isComplete };
    await setDoc(doc(db, "tasks", id), updatedTodo);
  };

  const clearAll = async () => {
    for (const todo of todos) {
      await deleteDoc(doc(db, "tasks", todo.id));
    }
  };

  React.useEffect(
    () =>
      onSnapshot(collection(db, "tasks"), (snapshot) => {
        const remoteTodos = snapshot.docs
          .map((doc) => doc.data())
          .slice()
          .sort((a, b) => a.index - b.index) as ITodo[];

        setTodos(remoteTodos);
      }),
    []
  );

  return (
    <TodoContext.Provider
      value={{
        todoType,
        todos,
        addTodo,
        updateDescription,
        deleteTodo,
        completeTodo,
        clearAll,
        setTodoType,
        setTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
