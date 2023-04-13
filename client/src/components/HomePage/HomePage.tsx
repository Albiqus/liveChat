import { useSelector } from "react-redux";
import { Button, ButtonBox, ButtonText, Div, Form, Input, Label, LogoutButton, Nickname, Paragraph, Preloader, Wrapper } from "./HomePage-styles"
import { RootState } from "../../store/store";
import logoutIcon from '../../images/icons/logout.png'
import preloader from '../../images/preloaders/pending.svg'
import { useDispatch } from "react-redux";
import { setAuthStatus } from "../../actionCreators/Login";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PassInput } from "../LiveChat/Common/PassInput/PassInput";
import { connectRoomFetchRequested, setHomePagePreloader } from "../../actionCreators/HomePage";


export const HomePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { authStatus } = useSelector((state: RootState) => state.login);
    const { nickname, isPreloader } = useSelector((state: RootState) => state.homePage);

    const [roomName, setRoomName] = useState('')
    const [pass, setPass] = useState('')

    const onLogoutClick = () => {
        localStorage.removeItem('authStatus')
        localStorage.removeItem('nickname')
        localStorage.removeItem('id')
        dispatch(setAuthStatus(false))
    }

    const onRoomNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRoomName(e.target.value)
    }

    const onPassChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value)
    }

    const onFormSubmit = () => {
        if (roomName && pass) {
            dispatch(setHomePagePreloader())
            // dispatch(connectRoomFetchRequested(roomName, pass))
        } else {
            // const errors = getErrors('login', nickname, pass)
            // dispatch(setLoginErrors(errors))
        }
    }


    useEffect(() => {
        if (!authStatus) {
            navigate(`/`)
        }
    }, [authStatus])


    return (
        <Div>
            <Nickname>{nickname}</Nickname>
            <LogoutButton onClick={onLogoutClick} src={logoutIcon}></LogoutButton>
            <Paragraph>Connect to an existing room or create your own:</Paragraph>

            <Form>
                <Wrapper>
                    <Label>Room Name</Label>
                    <Input value={roomName} onChange={onRoomNameChange} />
                    {/* <Error inputType={'nickname'} currentErrorIds={currentErrorIds}></Error> */}
                </Wrapper>

                <Wrapper>
                    <Label>Password</Label>
                    <PassInput pass={pass} onPassChange={onPassChange} />
                    {/* <Error inputType={'password'} currentErrorIds={currentErrorIds}></Error> */}
                </Wrapper>

                <ButtonBox>
                    <Button onClick={onFormSubmit}>
                        {!isPreloader && <ButtonText>connect</ButtonText>}
                        {isPreloader && <Preloader src={preloader}></Preloader>}
                    </Button>
                </ButtonBox>
            </Form>
        </Div>
    )
}