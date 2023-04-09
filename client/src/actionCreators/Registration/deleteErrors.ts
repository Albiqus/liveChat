import { DELETE_REGISTRATION_ERRORS } from "../../data/actionTypes"


export const deleteErrors = (errorIds: number[]) => {
    return {
        type: DELETE_REGISTRATION_ERRORS,
        payload: {
            errorIds
        }
    }
}