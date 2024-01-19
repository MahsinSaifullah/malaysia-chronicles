import * as React from "react";
import { ITodo, ITodoType } from "../types";

export interface ITodoContext {
  todoType: ITodoType | null;
  takeTodos: ITodo[];
  bringTodos: ITodo[];
  addTodo: (todo: ITodo) => void;
  updateTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  completeTodo: (id: string) => void;
  setTodoType: React.Dispatch<React.SetStateAction<ITodoType | null>>;
}

const initialState: ITodoContext = {
  todoType: null,
  takeTodos: [],
  bringTodos: [],
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
  const [takeTodos, setTakeTodos] = React.useState<ITodo[]>([
    {
      id: "1",
      desription: "passports",
      isComplete: false,
    },
    {
      id: "2",
      desription: "ameerah's toys",
      isComplete: false,
    },
    {
      id: "3",
      desription: "socks",
      isComplete: false,
    },
  ]);
  const [bringTodos, setBringTodos] = React.useState<ITodo[]>([
    {
      id: "1",
      desription: "noodles",
      isComplete: false,
    },
    {
      id: "2",
      desription: "dresses",
      isComplete: false,
    },
    {
      id: "3",
      desription: "glasses",
      isComplete: false,
    },
    {
      id: "4",
      desription: "lenses",
      isComplete: false,
    },
  ]);

  const addTodo = () => {};
  const updateTodo = () => {};
  const deleteTodo = () => {};
  const completeTodo = () => {};

  return (
    <TodoContext.Provider
      value={{
        todoType,
        takeTodos,
        bringTodos,
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
