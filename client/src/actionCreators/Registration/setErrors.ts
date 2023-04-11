import { SET_REGISTRATION_ERRORS } from "../../data/actionTypes"


export const setRegistrationErrors = (errorIds: number[]) => {
    return {
        type: SET_REGISTRATION_ERRORS,
        payload: {
            errorIds
        }
    }
}