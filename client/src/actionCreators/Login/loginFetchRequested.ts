import { LOGIN_FETCH_REQUESTED } from "../../data/actionTypes"


export const loginFetchRequested = (nickname: string, password: string) => {
    return {
        type: LOGIN_FETCH_REQUESTED,
        payload: {
            nickname,
            password,
        }
    }
}