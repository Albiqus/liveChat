import { Text } from "./Error-styles"
import { nickErrorIds, passErrorIds, registrationErrors, repeatPassErrorIds } from "../../../../data/registrationErrors";
import { ErrorProps } from "../../../../types/Registration/ErrorProps";


export const Error = ({ inputType, currentErrorIds }: ErrorProps) => {
    
    let errorIds: number[]
    switch (inputType) {
        case 'nickname': errorIds = nickErrorIds
            break
        case 'password': errorIds = passErrorIds
            break
        case 'repeatPassword': errorIds = repeatPassErrorIds
            break
    }
    
    const errorId = currentErrorIds.find((errorId: number) => errorIds.includes(errorId))
    
    return <Text>{errorId && registrationErrors[errorId]}</Text>
}