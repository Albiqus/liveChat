import { SET_USER_DATA } from "../../data/actionTypes"


export const setUserData = (nickname: string, id: string) => {
    return {
        type: SET_USER_DATA,
        payload: {
            nickname, id
        }
    }
}