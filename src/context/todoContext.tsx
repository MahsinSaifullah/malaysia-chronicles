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
  updateTodo: (id: string, description: string) => void;
  deleteTodo: (id: string) => void;
  completeTodo: (id: string) => void;
  setTodoType: React.Dispatch<React.SetStateAction<ITodoType | null>>;
}

const initialState: ITodoContext = {
  todoType: null,
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  completeTodo: () => {},
  setTodoType: () => {},
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
    };

    setTodos((todos) => [...todos, newTodo]);

    await setDoc(doc(db, "tasks", newTodo.id), newTodo);
  };

  const updateTodo = async (id: string, description: string) => {
    const foundTodo = todos.find((todo) => todo.id === id);

    if (!foundTodo) {
      return;
    }

    const updatedTodo = { ...foundTodo, description };
    setTodos((todos) => [...todos, updatedTodo]);

    await setDoc(doc(db, "tasks", id), updatedTodo);
  };

  const deleteTodo = async (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    await deleteDoc(doc(db, "tasks", id));
  };

  const completeTodo = async (id: string) => {
    const foundTodo = todos.find((todo) => todo.id === id);

    if (!foundTodo) {
      return;
    }

    const updatedTodo = { ...foundTodo, isComplete: !foundTodo.isComplete };
    setTodos((todos) => [...todos, updatedTodo]);

    await setDoc(doc(db, "tasks", id), updatedTodo);
  };

  React.useEffect(
    () =>
      onSnapshot(collection(db, "tasks"), (snapshot) => {
        const remoteTodos = snapshot.docs.map((doc) => doc.data()) as ITodo[];

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
        updateTodo,
        deleteTodo,
        completeTodo,
        setTodoType,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
