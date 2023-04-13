import { ChangeEvent, useEffect, useState } from "react"
import {  Div, Form, Hint, Input, Label, Paragraph, Wrapper } from "./Login-styles"
import { PassInput } from "../Common/PassInput/PassInput"
import { useDispatch, useSelector } from "react-redux"
import { setLoginPreloader } from "../../../actionCreators/Login/setPreloader"
import { getErrors } from "../../../utils/getErrors"
import { deleteLoginErrors, loginFetchRequested, setLoginErrors } from "../../../actionCreators/Login"
import { RootState } from "../../../store/store"
import { NavLink, useNavigate } from 'react-router-dom';
import { Error } from "../Common/Error/Error"
import { SuccessRegistration } from "./SuccessRegistration/SuccessRegistration"
import { setRegistrationStatus } from "../../../actionCreators/Registration"
import { nickErrorIds, passErrorIds } from "../../../data/registrationErrors"
import { SubmitButton } from "../Common/Button/SubmitButton"


export const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { currentErrorIds, isPreloader, authStatus } = useSelector((state: RootState) => state.login);
    const { regStatus } = useSelector((state: RootState) => state.registration);
    const { id } = useSelector((state: RootState) => state.homePage);

    const [nickname, setNickname] = useState('')
    const [pass, setPass] = useState('')
    
    const onPassChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(deleteLoginErrors(passErrorIds))
        setPass(e.target.value)
    }
    const onNickChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(deleteLoginErrors(nickErrorIds))
        setNickname(e.target.value)
    }

    const onFormSubmit = () => {
        if (nickname && pass) {
            dispatch(setLoginPreloader())
            dispatch(loginFetchRequested(nickname, pass))
        } else {
            const errors = getErrors('login', nickname, pass)
            dispatch(setLoginErrors(errors))
        }
    }

    const onRegLinkClick = () => {
        dispatch(setRegistrationStatus(false))
    }


    useEffect(() => {
        if (authStatus) {
            navigate(`/user/${id}`)
        }
    }, [authStatus])


    return (
        <Div>
            {regStatus && <SuccessRegistration />}
            <Paragraph>Login to your account</Paragraph>

            <Form>
                <Wrapper>
                    <Label>Nickname</Label>
                    <Input value={nickname} onChange={onNickChange} />
                    <Error inputType={'nickname'} currentErrorIds={currentErrorIds}></Error>
                </Wrapper>

                <Wrapper>
                    <Label>Password</Label>
                    <PassInput pass={pass} onPassChange={onPassChange} />
                    <Error inputType={'password'} currentErrorIds={currentErrorIds}></Error>
                </Wrapper>

                <SubmitButton onFormSubmit={onFormSubmit} isPreloader={isPreloader} text={'sign in'}></SubmitButton>

                <Hint>Not registered yet? {<NavLink onClick={onRegLinkClick} to='/registration'>Registration</NavLink>}</Hint>
            </Form>
        </Div>
    )
}