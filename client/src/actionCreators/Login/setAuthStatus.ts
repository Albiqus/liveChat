import { SET_AUTH_STATUS } from "../../data/actionTypes"


export const setAuthStatus = (status: boolean) => {
    return {
        type: SET_AUTH_STATUS,
        payload: {
            status,
        }
    }
}