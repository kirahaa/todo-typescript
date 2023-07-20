import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getCurrentUser} from "../../services/auth.service";
import styled from "@emotion/styled";

const AuthLayout = () => {
    const navigate = useNavigate()
    const currentUser = getCurrentUser()

    useEffect(() => {
      if (currentUser) {
        navigate('/todo')
      }
    }, [currentUser])

    return (
        <Wrap>
            <Outlet />
        </Wrap>
    )
}

export default AuthLayout

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  background-color: #e9ecef;
`