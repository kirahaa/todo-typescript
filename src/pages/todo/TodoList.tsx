import styled from "@emotion/styled";
import TodoItem from "./TodoItem";
import ITodo from "../../types/todo.type";

interface PropTypes {
  todos: ITodo[],
  handleToggle: (data: ITodo) => void;
  handleUpdate: (data: ITodo, value: string) => void;
  handleDelete: (data: ITodo) => void;
}

const TodoList = ({todos, handleToggle, handleUpdate, handleDelete}: PropTypes) => {
  return (
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggle={handleToggle}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </TodoListBlock>
  )
}

export default TodoList

const TodoListBlock = styled.ul`
  flex: 1;
  padding: 2rem 3.2rem 4.8rem;
  overflow-y: auto;
`