import {getTodos} from "../services/todo.service";
import {TodoDispatch} from "../store/TodoContext";

export const appInit = (dispatch: TodoDispatch) => {
  getTodos().then((response) => {
    if (response.status === 200) {
      dispatch({ type: 'GET_TODOS', todo: [...response.data] })
    } else {
      dispatch({ type: 'GET_TODOS', todo: [] })
    }
  })
}