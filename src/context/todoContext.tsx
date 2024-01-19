import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { ITodo, ITodoType } from "../types";

export interface ITodoContext {
  todoType: ITodoType | null;
  todos: ITodo[];
  addTodo: (newItem: string) => void;
  updateTodo: (id: string) => void;
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

  const addTodo = (newItem: string) => {
    if (!todoType) {
      return;
    }

    const newTodo: ITodo = {
      id: uuidv4(),
      desription: newItem,
      isComplete: false,
      type: todoType,
    };

    setTodos((todos) => [...todos, newTodo]);
  };

  const updateTodo = () => {};
  const deleteTodo = () => {};

  const completeTodo = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        }

        return todo;
      })
    );
  };

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
