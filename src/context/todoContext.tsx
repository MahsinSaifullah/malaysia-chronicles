import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { ITodo, ITodoType } from "../types";

export interface ITodoContext {
  todoType: ITodoType | null;
  takeTodos: ITodo[];
  bringTodos: ITodo[];
  addTodo: (newItem: string) => void;
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
  const [takeTodos, setTakeTodos] = React.useState<ITodo[]>([]);
  const [bringTodos, setBringTodos] = React.useState<ITodo[]>([]);

  const addTodo = (newItem: string) => {
    const newTodo: ITodo = {
      id: uuidv4(),
      desription: newItem,
      isComplete: false,
    };

    if (!todoType) {
      return;
    }

    if (todoType === "take") {
      setTakeTodos((todos) => [...todos, newTodo]);
    } else {
      setBringTodos((todos) => [...todos, newTodo]);
    }
  };

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
