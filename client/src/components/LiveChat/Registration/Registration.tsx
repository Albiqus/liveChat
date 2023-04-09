import { Button, ButtonBox, ButtonText, Div, Form, Header, Input, Label, Paragraph, Wrapper, Placeholder, Tooltip, P, Preloader } from "./Registration-styles"
import { useSelector, useDispatch } from "react-redux";
import placeholder from '../../../images/icons/placeholder.png'
import { useState } from 'react';
import { getRegistrationErrors } from "../../../utils/getRegistrationErrors";
import { PassInput } from "./PassInput/PassInput";
import preloader from '../../../images/preloaders/pending.svg'
import { RootState } from "../../../store/store";
import { Error } from "./Error/Error";
import { nickErrorIds, passErrorIds, repeatPassErrorIds } from "../../../data/registrationErrors";
import { createUserFetchRequested, deleteErrors, setErrors, setPreloader } from "../../../actionCreators/Registration";
import { ChangeEvent } from 'react';


export const Registration = () => {

    const dispatch = useDispatch();
    const { isPreloader } = useSelector((state: RootState) => state.registration);

    const [nickname, setNickname] = useState('')
    const [pass, setPass] = useState('')
    const [repeatPass, setRepeatPass] = useState('')

    const [nicknameTooltip, setNicknameTooltip] = useState(false)
    const [passTooltip, setPassTooltip] = useState(false)
    const [repeatPassTooltip, setRepeatPassTooltip] = useState(false)


    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(deleteErrors(nickErrorIds))
        setNickname(e.target.value)
    }
    const onPassChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(deleteErrors(passErrorIds))
        setPass(e.target.value)
    }
    const onRepeatPassChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(deleteErrors(repeatPassErrorIds))
        setRepeatPass(e.target.value)
    }

    const onFormSubmit = () => {
        if (nickname && pass && repeatPass) {
            dispatch(setPreloader())
            dispatch(createUserFetchRequested(nickname, pass, repeatPass))
        } else {
            const errors = getRegistrationErrors(nickname, pass, repeatPass)
            dispatch(setErrors(errors))
        }
    }

    const onNicknameMouseEnter = () => setNicknameTooltip(true)
    const onNicknameMouseLeave = () => setNicknameTooltip(false)
    const onPassMouseEnter = () => setPassTooltip(true)
    const onPassMouseLeave = () => setPassTooltip(false)
    const onRepeatPassMouseEnter = () => setRepeatPassTooltip(true)
    const onRepeatPassMouseLeave = () => setRepeatPassTooltip(false)

    return (
        <Div>

            <Header>welcome to the club buddy</Header>
            <Paragraph>to use the LiveChat, you need to create an account</Paragraph>

            <Form>
                <Wrapper>
                    <Label>Nickname</Label>
                    <Placeholder onMouseEnter={onNicknameMouseEnter} onMouseLeave={onNicknameMouseLeave} src={placeholder}></Placeholder>
                    <Input onChange={onNameChange} value={nickname} />
                    <Error type={'nickname'}></Error>

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
                    <Error type={'password'}></Error>

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
                    <Error type={'repeatPassword'}></Error>

                    {repeatPassTooltip &&
                        <Tooltip style={{ left: '200px' }}>
                            <P>- obligatory field</P>
                            <P>- passwords must match</P>
                        </Tooltip>
                    }
                </Wrapper>

                <ButtonBox>
                    <Button onClick={onFormSubmit}>
                        {!isPreloader && <ButtonText>join to LiveChat</ButtonText>}
                        {isPreloader && <Preloader src={preloader}></Preloader>}
                    </Button>
                </ButtonBox>
            </Form>

        </Div>
    )
}