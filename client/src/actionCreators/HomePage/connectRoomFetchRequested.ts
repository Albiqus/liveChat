import { CONNECT_ROOM_FETCH_REQUESTED } from "../../data/actionTypes"


export const connectRoomFetchRequested = (roomName: string, password: string) => {
    return {
        type: CONNECT_ROOM_FETCH_REQUESTED,
        payload: {
            roomName,
            password,
        }
    }
}