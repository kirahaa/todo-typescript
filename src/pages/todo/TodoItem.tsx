import styled from "@emotion/styled";
import {css} from "@emotion/react";
import React, {useState} from "react";
import {MdCancel, MdEdit} from "react-icons/md";
import ITodo from "../../types/todo.type";
import Checkbox from "../../components/common/Checkbox";
import useConfirm from "../../hooks/useConfirm";

interface PropTypes {
  todo: ITodo;
  handleToggle: (data: ITodo) => void;
  handleUpdate: (data: ITodo, value: string) => void;
  handleDelete: (data: ITodo) => void;
}

const TodoItem = ({todo, handleToggle, handleUpdate, handleDelete}: PropTypes) => {
  const [value, setValue] = useState(todo.todo)
  const [edit, setEdit] = useState(false)

  const deleteConfirm = useConfirm("정말 삭제하시겠습니까?", () => handleDelete(todo), () => {})

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleUpdate(todo, value)
    setEdit(false)
  }

  return (
    <TodoItemBlock>
      <Checkbox id={todo.id} todo={todo.todo} isCompleted={todo.isCompleted} onClick={() => handleToggle(todo)}/>
      {edit ?
        <>
          <EditForm>
            <StyledInput type="text" onChange={onChange} value={value} />
          </EditForm>
          <BtnWrap>
            <Edit type="button" onClick={onEdit}>
              <MdEdit />
            </Edit>
            <Remove type="button" onClick={() => setEdit(false)}>
              <MdCancel/>
            </Remove>
          </BtnWrap>
        </> :
        <>
          <Text isCompleted={todo.isCompleted}>{todo.todo}</Text>
          <BtnWrap>
            <Edit type="button" onClick={() => setEdit(true)}>
              <MdEdit/>
            </Edit>
            <Remove type="button" onClick={deleteConfirm}>
              <MdCancel/>
            </Remove>
          </BtnWrap>
        </>
      }
    </TodoItemBlock>
  )
}

export default TodoItem

const EditForm = styled.form`
  display: block;
`

const BtnWrap = styled.div`
  display: flex;
`

const Edit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  margin-right: 1rem;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;

  &:hover {
    color: #ffbf6b;
  }
`

const Remove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  
  &:hover {
    color: #ff6b6b;
  }
`

const TodoItemBlock = styled.li`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  
  &:hover {
    button {
      opacity: 1;
    }
  }
`

const Text = styled.div<{isCompleted: boolean}>`
  flex: 1;
  font-size: 2.1rem;
  color: #495057;
  ${props =>
  props.isCompleted &&
  css`
      color: #ced4da;
    `}
`

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 1.2rem;
  border-radius: 0.4rem;
  border: 0.1rem solid #dee2e6;
  outline: none;
  font-size: 1.8rem;
`