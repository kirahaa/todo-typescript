import styled from "@emotion/styled"
import {Form, Formik} from "formik"
import * as Yup from 'yup'
import {useState} from "react"
import {useNavigate} from "react-router-dom"

import {login} from 'services/auth.service'
import {Alert, Button, ErrorMsg, FormGroup, Input, Label} from "../signup";

const SignIn = () => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    const initialValues: {
        email: string;
        password: string;
    } = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
          .email("This is not a valid email.")
          .required("This field is required!"),
        password: Yup.string()
          .test(
            "len",
            "The password must be over 8 characters.",
            (val: any) =>
              val &&
              val.toString().length >= 8
          )
          .required("This field is required!")
    })

    const handleLogin = (formValue: { email: string; password: string }) => {
        const { email, password } = formValue

        setMessage("")
        setLoading(true)

        login(email, password).then(
            () => {
                navigate("/todo")
                window.location.reload()
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage)
            }
        )
    }

    return (
        <SignInWrap>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}>
                <Form>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" type="text" />
                        <ErrorMsg name="email" component="div" />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input name="password" type="password" />
                        <ErrorMsg name="password" component="div" />
                    </FormGroup>

                    <FormGroup>
                        <Button type="submit" disabled={loading}>
                            Login
                        </Button>
                    </FormGroup>

                    {message && (
                        <div>
                            <Alert className="alert" role="alert">
                                {message}
                            </Alert>
                        </div>
                    )}
                </Form>
            </Formik>
        </SignInWrap>
    )
}

export default SignIn

const SignInWrap = styled.div`
  width: 32rem;
  height: 30rem;
`