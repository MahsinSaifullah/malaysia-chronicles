import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Landing, Todo, Error } from "./components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/todo/:typeOfTodo",
        element: <Todo />,
      },
    ],
  },
]);
