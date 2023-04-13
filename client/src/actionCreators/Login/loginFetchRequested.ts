import { LOGIN_USER_FETCH_REQUESTED } from "../../data/actionTypes"


export const loginFetchRequested = (nickname: string, password: string) => {
    return {
        type: LOGIN_USER_FETCH_REQUESTED,
        payload: {
            nickname,
            password,
        }
    }
}