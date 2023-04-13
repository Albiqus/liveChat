import axios from "axios";
import { AuthUserPayload } from "../../types/Login/AuthUserPayload";
import { url } from "../../data/url";


export const authUser = (payload: AuthUserPayload) => {
    return axios({
        method: 'get',
        url: `${url}/api/authUser?nickname=${payload.nickname}&password=${payload.password}`,
    })
}