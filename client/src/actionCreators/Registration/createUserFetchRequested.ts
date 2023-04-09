import { CREATE_USER_FETCH_REQUESTED } from "../../data/actionTypes"


export const createUserFetchRequested = (nickname: string, password: string, repeatPass: string) => {
    return {
        type: CREATE_USER_FETCH_REQUESTED,
        payload: {
            nickname,
            password,
            repeatPass
        }
    }
}