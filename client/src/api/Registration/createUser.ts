import axios from "axios";
import { CreateUserPayload } from "../../types/Registration/CreateUserPayload";


export const createUser = (payload: CreateUserPayload) => {
    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/user',
        data: {
            nickname: payload.nickname,
            password: payload.password,
            repeatPass: payload.repeatPass
        }
    })
}