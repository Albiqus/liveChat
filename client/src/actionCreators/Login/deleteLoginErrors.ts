import { DELETE_LOGIN_ERRORS } from "../../data/actionTypes"


export const deleteLoginErrors = (errorIds: number[]) => {
    return {
        type: DELETE_LOGIN_ERRORS,
        payload: {
            errorIds: [...errorIds, 9]
        }
    }
}