import {useEffect} from "react";
import {getCurrentUser} from "../../services/auth.service";
import {useNavigate} from "react-router-dom";
import styled from "@emotion/styled";
import TodoHeader from "./TodoHeader";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import ITodo from "../../types/todo.type";
import {useTodoDispatch, useTodoState} from "../../store/TodoContext";
import {appInit} from "../../utils";
import {deleteTodo, updateTodo} from "../../services/todo.service";

const Todo = () => {
    const navigate = useNavigate()
    const currentUser = getCurrentUser()

    const todos = useTodoState()
    const dispatch = useTodoDispatch()

    const handleToggle = (data: ITodo) => {
        data.isCompleted = !data.isCompleted
        updateTodo(data).then(response => {
            dispatch({ type: "UPDATE_TODO", todo: response })
        })
    }

    const handleUpdate = (data: ITodo, value: string) => {
        data.todo = value
        updateTodo(data).then(response => {
            dispatch({ type: "UPDATE_TODO", todo: response })
        })
    }

    const handleDelete = (data: ITodo) => {
        deleteTodo(data).then(response => {
            dispatch({ type: "DELETE_TODO", todo: data})
        })
    }

    useEffect(() => {
        if (!currentUser) {
            navigate('/signin')
        }
        appInit(dispatch)
    }, [])

    return (
      todos ? (
        <TodoBlock>
            <TodoHeader />
            <TodoList
              todos={todos}
              handleToggle={handleToggle}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
            <TodoCreate />
        </TodoBlock>
      ) : (
        <NoData>데이터를 찾을 수 없습니다.</NoData>
      )
    )
}

export default Todo

const TodoBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 51.2rem;
  height: 76.8rem;
  border-radius: 2rem;
  background-color: #fff;
`

const NoData = styled(TodoBlock)`
    justify-content: center;
    align-items: center;
    font-size: 2.4rem;
`