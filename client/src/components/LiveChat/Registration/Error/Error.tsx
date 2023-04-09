import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { Text } from "./Error-styles"
import { nickErrorIds, passErrorIds, registrationErrors, repeatPassErrorIds } from "../../../../data/registrationErrors";
import { ErrorProps } from "../../../../types/Registration/ErrorProps";


export const Error = ({ type }: ErrorProps) => {
    const { currentErrorIds } = useSelector((state: RootState) => state.registration);

    let errorIds: number[]
    switch (type) {
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