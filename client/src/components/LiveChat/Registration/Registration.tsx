import { Button, ButtonBox, ButtonText, Div, Error, Form, Header, Input, Label, Paragraph, Wrapper, Placeholder, Tooltip, P } from "./Registration-styles"
import placeholder from '../../../images/icons/placeholder.png'
import { useState } from 'react';
import { getIsEmptyInputs } from "../../../utils/getIsEmptyInputs";
import { createUser } from "../../../thunks/createUser";
import { PassInput } from "./PassInput/PassInput";


export const Registration = () => {

    const [nickname, setNickname] = useState('')
    const [pass, setPass] = useState('')
    const [repeatPass, setRepeatPass] = useState('')

    const [nicknameTooltip, setNicknameTooltip] = useState(false)
    const [passTooltip, setPassTooltip] = useState(false)
    const [repeatPassTooltip, setRepeatPassTooltip] = useState(false)

    const [isEmptyInputs, setIsEmptyInputs] = useState({ nickname: false, pass: false, repeatPass: false })


    const onNameChange = (e: any) => {
        setIsEmptyInputs((prevIsEmptyInputs) => ({ ...prevIsEmptyInputs, nickname: false }))
        setIsEmptyInputs({ ...isEmptyInputs, nickname: false })
        setNickname(e.target.value)
    }
    const onPassChange = (e: any) => {
        setIsEmptyInputs((prevIsEmptyInputs) => ({ ...prevIsEmptyInputs, pass: false }))
        setPass(e.target.value)
    }
    const onRepeatPassChange = (e: any) => {
        setIsEmptyInputs((prevIsEmptyInputs) => ({ ...prevIsEmptyInputs, repeatPass: false }))
        setRepeatPass(e.target.value)
    }

    const onFormSubmit = () => {
        if (nickname && pass && repeatPass) {
            createUser(nickname, pass)
        } else {
            setIsEmptyInputs(getIsEmptyInputs(nickname, pass, repeatPass))
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
                    {isEmptyInputs.nickname && <Error>obligatory field</Error>}
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
                    {isEmptyInputs.pass && <Error>obligatory field</Error>}
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
                    {isEmptyInputs.repeatPass && <Error>obligatory field</Error>}
                    {repeatPassTooltip &&
                        <Tooltip style={{ left: '200px' }}>
                            <P>- obligatory field</P>
                            <P>- passwords must match</P>
                        </Tooltip>
                    }
                </Wrapper>

                <ButtonBox>
                    <Button onClick={onFormSubmit}>
                        <ButtonText>join to LiveChat</ButtonText>
                    </Button>
                </ButtonBox>
            </Form>
        </Div>
    )
}