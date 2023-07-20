import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import AuthLayout from "../components/layout/AuthLayout";
import Signup from "../pages/signup";
import Todo from "../pages/todo";
import SignIn from "../pages/signin";

const Router = () => {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Todo />}/>
                <Route path="/todo" element={<Todo />} />
            </Route>
            <Route element={<AuthLayout />}>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/signin" element={<SignIn />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    )
}
export default Router