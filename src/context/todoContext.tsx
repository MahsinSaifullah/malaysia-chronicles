import * as React from "react";
import { ITodo, ITodoType } from "../types";

export interface ITodoContext {
  takeTodos: ITodo[];
  bringTodos: ITodo[];
  addTodo: (todo: ITodo, type: ITodoType) => void;
  updateTodo: (id: string, type: ITodoType) => void;
  deleteTodo: (id: string, type: ITodoType) => void;
}

const initialState: ITodoContext = {
  takeTodos: [],
  bringTodos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
};

export const TodoContext = React.createContext<ITodoContext>(initialState);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

  return (
    <TodoContext.Provider
      value={{ takeTodos, bringTodos, addTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
