import { AuthUserPayload } from "./AuthUserPayload";


export interface AuthUserAction {
    type: string;
    payload: AuthUserPayload
}