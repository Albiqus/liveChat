import { useState } from 'react';
import { PassInputProps } from '../../../../types/PassInputPropsType';
import { Div, Input, ShowPassTumbler } from './PassInput-styles';
import seenIcon from '../../../../images/icons/seen.png'
import hideIcon from '../../../../images/icons/hide.png'


export const PassInput = ({ pass, onPassChange }: PassInputProps) => {

    const [passVisibility, setPassVisibility] = useState(false)

    const onThumblerClick = () => {
        setPassVisibility((prevVisible) => !prevVisible)
    }

    return (
        <Div>
            <Input onChange={onPassChange} value={pass} type={passVisibility ? 'default' : 'password'} required />
            <ShowPassTumbler onClick={onThumblerClick} src={passVisibility ? seenIcon : hideIcon} alt="" />
        </Div>
    )
}