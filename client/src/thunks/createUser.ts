import axios from "axios";


export const createUser = (nickname: string, password: string, repeatPass: string) => {
    axios({
        method: 'post',
        url: 'http://localhost:5000/api/user',
        data: {
            nickname,
            password,
            repeatPass
        }
    }).then(data => console.log(data));
}