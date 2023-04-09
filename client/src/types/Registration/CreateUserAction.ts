import { CreateUserPayload } from "./CreateUserPayload";


export interface CreateUserAction {
    type: string;
    payload: CreateUserPayload
}