import { CREATE_USER_FETCH_SUCCEEDED, DELETE_REGISTRATION_ERRORS, SET_REGISTRATION_ERRORS, SET_REGISTRATION_PRELOADER } from "../../data/actionTypes"


const startState = {
    isPreloader: false,
    currentErrorIds: []
}

export const registration = (state = startState, action: any) => {
    switch (action.type) {
        case CREATE_USER_FETCH_SUCCEEDED: {
            return {
                ...state,
                isPreloader: false
            }
        } 
        case SET_REGISTRATION_PRELOADER: {
            return {
                ...state,
                isPreloader: true
            }
        }
        case SET_REGISTRATION_ERRORS: {
            return {
                ...state,
                currentErrorIds: Array.from(new Set([...state.currentErrorIds].concat(action.payload.errors)))
            }
        }  
        case DELETE_REGISTRATION_ERRORS: {
            return {
                ...state,
                currentErrorIds: [...state.currentErrorIds].filter(errorId => !action.payload.errorIds.includes(errorId))
            }
        }      
        default:
            return state;
    }
}