import {useNavigate} from "react-router-dom";
import styled from "@emotion/styled";
import {MdLogout} from "react-icons/md";
import {logout} from "../../services/auth.service";

const Header = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/signin')
  }

  return (
    <StyledHeader>
      <LogoutButton onClick={handleLogout}>
        <MdLogout />
      </LogoutButton>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 2rem;
`

const LogoutButton = styled.button`
  color: #38d9a9;  
  font-size: 3rem;
`