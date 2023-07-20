import axios from "axios";
import ITodo from "../types/todo.type";

export const token = localStorage.getItem('jwtToken')

axios.defaults.baseURL = `https://www.pre-onboarding-selection-task.shop`
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
axios.defaults.headers.post["Content-Type"] = "application/json"

export const getTodos = () => {
  return axios
    .get('/todos')
    .then(response => response)
    .catch(error => error.response)
}

export const postTodo = (data: ITodo) => {
  return axios
    .post('/todos', data)
    .then(response => response.data)
    .catch(error => error.message)
}

export const updateTodo = (data: ITodo) => {
  return axios
    .put(`/todos/${data.id}`, data)
    .then((response) => response.data)
    .catch((error) => error.message)
}

export const deleteTodo = (data: ITodo) => {
  return axios
    .delete(`/todos/${data.id}`)
    .then((response) => response.data)
    .catch((error) => error.message)
}