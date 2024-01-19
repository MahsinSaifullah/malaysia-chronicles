import * as React from 'react'
import { TodoContext } from '../context'

export const useTodo = () => {
  return React.useContext(TodoContext)
}

