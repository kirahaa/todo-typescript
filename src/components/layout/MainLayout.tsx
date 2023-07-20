
import {Outlet} from "react-router-dom";
import Header from "./Header";
import styled from "@emotion/styled";

const MainLayout = () => {
    return (
        <Wrap>
            <Header />
            <Outlet />
        </Wrap>
    )
}

export default MainLayout

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  background-color: #e9ecef;
`