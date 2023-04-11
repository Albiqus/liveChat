import { SET_LOGIN_ERRORS } from "../../data/actionTypes"


export const setLoginErrors = (errorIds: number[]) => {
    return {
        type: SET_LOGIN_ERRORS,
        payload: {
            errorIds
        }
    }
}