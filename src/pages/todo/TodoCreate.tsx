import styled from "@emotion/styled";
import React, {useState} from "react";
import {css} from "@emotion/react";
import {MdAdd, MdSend} from "react-icons/md";
import {postTodo} from "../../services/todo.service";
import {useTodoDispatch} from "../../store/TodoContext";


const TodoCreate = () => {
    const dispatch = useTodoDispatch()
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    const onToggle = () => setOpen(!open)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      todo: value,
      isCompleted: false
    }

    if (!value) {
      alert('할 일을 입력해 주세요')
    } else {
      postTodo(data).then(response => {
        dispatch({ type: "CREATE_TODO", todo: response })
      })
    }

    setValue('')
    setOpen(false)
  }

    return (
        <>
          {open && (
            <InsertFormPositioner>
              <InsertForm onSubmit={onSubmit}>
                <Input type="text"
                       autoFocus
                       placeholder="할 일을 입력 후, Enter 를 누르세요"
                       onChange={onChange}
                       value={value}
                />
                <Button type="submit">
                  <MdSend />
                </Button>
              </InsertForm>
            </InsertFormPositioner>
          )}
          <CircleButton onClick={onToggle} open={open}>
            <MdAdd />
          </CircleButton>
        </>
    )
}

export default TodoCreate

const CircleButton = styled.button<{open: boolean}>`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  
  position: absolute;
  left: 50%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  font-size: 60px;
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  z-index: 5;
  cursor: pointer;
  transform: translate(-50%, 50%);
  transition: 0.125s all ease-in;
  
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`

const InsertForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  padding: 3.2rem 3.2rem 7.2rem;
  
  border-radius: 1.6rem;
  border-top: 0.1rem solid #e9ecef;
`
const Input = styled.input`
  width: 79%;
  padding: 1.2rem;    
  border-radius: 0.4rem;
  border: 0.1rem solid #dee2e6;
  outline: none;
  font-size: 1.8rem;
`

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 19%;
  padding: 1.2rem;
  border: 1px solid #38d9a9;
  border-radius: 0.4rem;
  font-size: 1.8rem;
  color: #fff;
  background: #38d9a9;
`