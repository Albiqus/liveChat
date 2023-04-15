import { Div, Form, Header, Input, Label, Paragraph, Wrapper, Placeholder, Tooltip, P, Hint } from "./Registration-styles"
import { useSelector, useDispatch } from "react-redux";
import placeholder from '../../../images/icons/placeholder.png'
import { useEffect, useState } from 'react';
import { getErrors } from "../../../utils/getErrors";
import { RootState } from "../../../store/store";
import { nickErrorIds, passErrorIds, repeatPassErrorIds } from "../../../data/registrationErrors";
import { createUserFetchRequested, deleteRegErrors, setRegPreloader, setRegistrationErrors } from "../../../actionCreators/Registration";
import { ChangeEvent } from 'react';
import { PassInput } from "../Common/PassInput/PassInput";
import { NavLink, useNavigate } from 'react-router-dom';
import { Error } from "../Common/Error/Error";
import { SubmitButton } from "../Common/Button/SubmitButton";


export const Registration = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { isPreloader, currentErrorIds, regStatus } = useSelector((state: RootState) => state.registration);

    const [nickname, setNickname] = useState('')
    const [pass, setPass] = useState('')
    const [repeatPass, setRepeatPass] = useState('')

    const [nicknameTooltip, setNicknameTooltip] = useState(false)
    const [passTooltip, setPassTooltip] = useState(false)
    const [repeatPassTooltip, setRepeatPassTooltip] = useState(false)


    const onNickChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(deleteRegErrors(nickErrorIds))
        setNickname(e.target.value)
    }
    const onPassChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(deleteRegErrors(passErrorIds))
        setPass(e.target.value)
    }
    const onRepeatPassChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(deleteRegErrors(repeatPassErrorIds))
        setRepeatPass(e.target.value)
    }

    const onFormSubmit = () => {
        if (nickname && pass && repeatPass) {
            dispatch(setRegPreloader())
            dispatch(createUserFetchRequested(nickname, pass, repeatPass))
        } else {
            const errors = getErrors('registration', nickname, pass, repeatPass)
            dispatch(setRegistrationErrors(errors))
        }
    }

    const onNicknameMouseEnter = () => setNicknameTooltip(true)
    const onNicknameMouseLeave = () => setNicknameTooltip(false)
    const onPassMouseEnter = () => setPassTooltip(true)
    const onPassMouseLeave = () => setPassTooltip(false)
    const onRepeatPassMouseEnter = () => setRepeatPassTooltip(true)
    const onRepeatPassMouseLeave = () => setRepeatPassTooltip(false)

    useEffect(() => {
        if (regStatus) {
            navigate('/')
        }
    }, [regStatus])

    return (
        <Div>

            <Header>welcome to the club buddy</Header>
            <Paragraph>to use the LiveChat, you need to create an account</Paragraph>

            <Form>
                <Wrapper>
                    <Label>Nickname</Label>
                    <Placeholder onMouseEnter={onNicknameMouseEnter} onMouseLeave={onNicknameMouseLeave} src={placeholder}></Placeholder>
                    <Input onChange={onNickChange} value={nickname} />
                    <Error inputType={'nickname'} currentErrorIds={currentErrorIds}></Error>

                    {nicknameTooltip &&
                        <Tooltip>
                            <P>- obligatory field</P>
                            <P>- min 4 characters</P>
                            <P>- max 10 characters</P>
                            <P>- only latin letters</P>
                            <P>- numbers allowed</P>
                            <P>- underscore allowed</P>
                        </Tooltip>
                    }
                </Wrapper>

                <Wrapper>
                    <Label>Password</Label>
                    <Placeholder onMouseEnter={onPassMouseEnter} onMouseLeave={onPassMouseLeave} src={placeholder} ></Placeholder>
                    <PassInput pass={pass} onPassChange={onPassChange} />
                    <Error inputType={'password'} currentErrorIds={currentErrorIds}></Error>

                    {passTooltip &&
                        <Tooltip>
                            <P>- obligatory field</P>
                            <P>- min 10 characters</P>
                        </Tooltip>
                    }
                </Wrapper>

                <Wrapper>
                    <Label>Repeat Password</Label>
                    <Placeholder onMouseEnter={onRepeatPassMouseEnter} onMouseLeave={onRepeatPassMouseLeave} src={placeholder} style={{ right: '0px' }}></Placeholder>
                    <PassInput pass={repeatPass} onPassChange={onRepeatPassChange} />
                    <Error inputType={'repeatPassword'} currentErrorIds={currentErrorIds}></Error>

                    {repeatPassTooltip &&
                        <Tooltip style={{ left: '200px' }}>
                            <P>- obligatory field</P>
                            <P>- passwords must match</P>
                        </Tooltip>
                    }
                </Wrapper>

                <SubmitButton onFormSubmit={onFormSubmit} isPreloader={isPreloader} text={'join to LiveChat'}></SubmitButton>

                <Hint>Already have an account? {<NavLink to='/'>Login</NavLink>}</Hint>
            </Form>

        </Div>
    )
}

