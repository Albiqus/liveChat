import { SET_REGISTRATION_STATUS } from "../../data/actionTypes"


export const setRegistrationStatus = (status: boolean) => {
    return {
        type: SET_REGISTRATION_STATUS,
        payload: {
            status,
        }
    }
}