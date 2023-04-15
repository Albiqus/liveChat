import { SET_LOGIN_ERRORS, SET_LOGIN_PRELOADER } from "../../data/actionTypes"


const startState = {
    isPreloader: false,
    currentErrorIds: []
}

export const login = (state = startState, action: any) => {
    switch (action.type) {
        case SET_LOGIN_PRELOADER: {
            return {
                ...state,
                isPreloader: true
            }
        }
        case SET_LOGIN_ERRORS: {
            return {
                ...state,
                currentErrorIds: Array.from(new Set([...state.currentErrorIds].concat(action.payload.errorIds)))
            }
        }
        default:
            return state;
    }
}