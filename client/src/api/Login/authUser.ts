import axios from "axios";
import { AuthUserPayload } from "../../types/Login/AuthUserPayload";


export const authUser = (payload: AuthUserPayload) => {
    return axios({
        method: 'get',
        url: `http://localhost:5000/api/authUser?nickname=${payload.nickname}&password=${payload.password}`,
    })
}