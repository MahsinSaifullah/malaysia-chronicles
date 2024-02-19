import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './router';
import { TodoProvider, TodoTypeProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <TodoTypeProvider>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </TodoTypeProvider>
);
