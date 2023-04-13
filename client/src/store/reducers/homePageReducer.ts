import { SET_HOME_PAGE_PRELOADER, SET_USER_DATA } from '../../data/actionTypes';


const startState = {
    id: localStorage.getItem('id'),
    nickname: localStorage.getItem('nickname'), 
    isPreloader: false
}

export const homePage = (state = startState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                id: action.payload.id,
                nickname: action.payload.nickname
            }
        }
        case SET_HOME_PAGE_PRELOADER: {
            return {
                ...state,
                isPreloader: true
            }
        }
        default:
            return state;
    }
}