import * as React from 'react';
import { TodoTypeContext } from '../context';

export const useTodoType = () => {
  return React.useContext(TodoTypeContext);
};
