import styled from "@emotion/styled";
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import IUser from "../../types/user.type";
import {register} from "../../services/auth.service";
import {useState} from "react";

const Signup = () => {
    const [successful, setSuccessful] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    const initialValues: IUser = {
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

    const handleRegister = (formValue: IUser) => {
        const {email, password} = formValue

        register(email, password).then(
            (response) => {
                setMessage(response.data.message)
                setSuccessful(true)
            },
            (error) => {
                const resMessage =
                    (error.response &&
                     error.response.data &&
                     error.response.data.message) ||
                    error.message ||
                    error.toString()

                setMessage(resMessage)
                setSuccessful(false)
            }
        )
    }

    return (
        <SignupWrap>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleRegister}>
                <Form>
                    {!successful && (
                        <div>
                            <FormGroup>
                                <Label htmlFor="email">email</Label>
                                <Input name="email" type="text" className="form-control" />
                                <ErrorMsg name="email" component="div"/>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="password">password</Label>
                                <Input name="password" type="password"/>
                                <ErrorMsg name="password" component="div"/>
                            </FormGroup>

                            <FormGroup>
                                <Button type="submit">Sign Up</Button>
                            </FormGroup>
                        </div>
                    )}

                    {message && (
                        <div>
                            <Alert successful={successful} role="alert">
                                {message}
                            </Alert>
                        </div>
                    )}
                </Form>
            </Formik>
        </SignupWrap>
    )
}

export default Signup

const SignupWrap = styled.div`
  width: 32rem;
  height: 30rem;
`

export const Label = styled.label`
  margin-bottom: .5rem;
  font-size: 1.4rem;
`

export const Input = styled(Field)`
  padding: 1.5rem 2rem;
  border: 1px solid #000;
  border-radius: .5rem;
  font-size: 1.5rem;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const Button = styled.button`
  margin-top: 1rem;
  padding: 1.5rem 2rem;
  color: #fff;
  background-color: #000;
  border-radius: .5rem;
  border: 1px solid #000;
  font-size: 1.5rem;
`

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: .5rem;
  font-size: 1.4rem;
  color: red;
`

export const Alert = styled.div<{successful?: boolean}>`
  text-align: center;
  font-size: 1.4rem;
  color: ${props => {
    if(props.successful) return 'green'
    else return 'red'
  }};
`