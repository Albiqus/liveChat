import axios from "axios";
import { CreateUserPayload } from "../../types/Registration/CreateUserPayload";
import { url } from "../../data/url";


export const createUser = (payload: CreateUserPayload) => {
    return axios({
        method: 'post',
        url: `${url}/api/createUser`,
        data: {
            nickname: payload.nickname,
            password: payload.password,
            repeatPass: payload.repeatPass
        }
    })
}