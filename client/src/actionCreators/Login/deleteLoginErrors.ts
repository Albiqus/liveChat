import { DELETE_LOGIN_ERRORS } from "../../data/actionTypes"
import { incorrectValuesErrorId } from "../../data/registrationErrors"


export const deleteLoginErrors = (errorIds: number[]) => {
    return {
        type: DELETE_LOGIN_ERRORS,
        payload: {
            errorIds: [...errorIds, incorrectValuesErrorId]
        }
    }
}