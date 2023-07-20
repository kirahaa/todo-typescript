import React, {createContext, Dispatch, useContext, useReducer} from "react";
import ITodo from "../types/todo.type";

const initialTodos: ITodo[] = []

export const actionTypes = {
  GET_TODOS: "GET_TODOS",
  CREATE_TODO: "CREATE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  DELETE_TODO: "DELETE_TODO"
}

export type Action =
  | { type: 'GET_TODOS'; todo: ITodo[] | [] }
  | { type: 'CREATE_TODO'; todo: ITodo[] }
  | { type: 'UPDATE_TODO'; todo: ITodo }
  | { type: 'DELETE_TODO'; todo: ITodo }

export type TodoDispatch = Dispatch<Action>

const TodoStateContext = createContext<ITodo[] | null>(null)
const TodoDispatchContext = createContext<TodoDispatch | null>(null)

const todoReducer = (state: ITodo[], action: Action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return action.todo
    case 'CREATE_TODO':
      return state.concat(action.todo)
    case 'UPDATE_TODO':
      return state.map(todo =>
        todo.id === action.todo.id ? {...action.todo} : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.todo.id)
  }
}

export const TodoProvider = ({children}: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos)

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export const useTodoState = () => {
  const context = useContext(TodoStateContext)
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context;
}

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext)
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context
}
