import axios from "axios";


export const createUser = (nickname: string, password: string) => {
    axios({
        method: 'post',
        url: 'http://localhost:5000/api/user',
        data: {
            nickname,
            password
        }
    });
}