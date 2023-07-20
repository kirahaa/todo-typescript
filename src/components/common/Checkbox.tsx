import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {MdDone} from "react-icons/md";

interface PropTypes {
  id: number | undefined, // FIXME:: Type 'number | undefined' is not assignable to type 'number'.
  todo: string,
  isCompleted: boolean,
  onClick: () => void,
}

const Checkbox = ({id, todo, isCompleted, onClick}: PropTypes) => {
  return (
    <StyledLabel htmlFor={`checkbox-${id}`} isCompleted={isCompleted}>
      <StyledInput
        type="checkbox"
        id={`checkbox-${id}`}
        name={`checkbox-${id}`}
        onClick={onClick}
      />
      {isCompleted && <MdDone />}
    </StyledLabel>
  )
}

export default Checkbox

const StyledLabel = styled.label<{isCompleted: boolean}>`
  appearance: none;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 1.6rem;
  border: 1px solid #ced4da;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  cursor: pointer;

  ${props => props.isCompleted && css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`

const StyledInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
`