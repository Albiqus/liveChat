import { DELETE_LOGIN_ERRORS, LOGIN_USER_FETCH_SUCCEEDED, SET_AUTH_STATUS, SET_LOGIN_ERRORS, SET_LOGIN_PRELOADER } from "../../data/actionTypes"


const startState = {
    isPreloader: false,
    currentErrorIds: [],
    authStatus: localStorage.getItem('authStatus')
}

export const login = (state = startState, action: any) => {
    switch (action.type) {
        case LOGIN_USER_FETCH_SUCCEEDED: {
            return {
                ...state,
                isPreloader: false
            }
        }
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
        case DELETE_LOGIN_ERRORS: {
            return {
                ...state,
                currentErrorIds: [...state.currentErrorIds].filter(errorId => !action.payload.errorIds.includes(errorId))
            }
        }
        case SET_AUTH_STATUS: {
            return {
                ...state,
                authStatus: action.payload.status
            }
        }
        default:
            return state;
    }
}