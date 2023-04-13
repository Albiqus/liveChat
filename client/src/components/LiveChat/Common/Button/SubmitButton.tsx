import { ButtonProps } from "../../../../types/Common/ButtonProps"
import { Div, Preloader, Text, Wrapper } from "./SubmitButton-styles"
import preloader from '../../../../images/preloaders/pending.svg'


export const SubmitButton = ({ isPreloader, onFormSubmit, text }: ButtonProps) => {

    return (
        <Wrapper onClick={onFormSubmit}>
            <Div>
                {!isPreloader && <Text>{text}</Text>}
                {isPreloader && <Preloader src={preloader}></Preloader>}
            </Div>
        </Wrapper>
    )
}