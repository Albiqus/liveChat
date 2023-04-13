import { call, put, takeEvery } from 'redux-saga/effects'
import { CONNECT_ROOM_FETCH_FAILED, CONNECT_ROOM_FETCH_REQUESTED, CREATE_USER_FETCH_FAILED, CREATE_USER_FETCH_REQUESTED, CREATE_USER_FETCH_SUCCEEDED, LOGIN_USER_FETCH_FAILED, LOGIN_USER_FETCH_REQUESTED, LOGIN_USER_FETCH_SUCCEEDED, SET_LOGIN_ERRORS, SET_REGISTRATION_ERRORS } from '../data/actionTypes'
import { createUser } from '../api/Registration/createUser'
import { CreateUserAction } from '../types/Registration/CreateUserAction'
import { setRegistrationStatus } from '../actionCreators/Registration'
import { authUser } from '../api/Login/authUser'
import { AuthUserAction } from '../types/Login/AuthUserAction'
import { setAuthStatus } from '../actionCreators/Login'
import { setUserData } from '../actionCreators/HomePage'


function* fetchCreateUser(action: CreateUserAction): any {
    try {
        const regData = yield call(createUser, action.payload)
        yield put({
            type: CREATE_USER_FETCH_SUCCEEDED,
        })
        yield put({
            type: SET_REGISTRATION_ERRORS,
            payload: {
                errorIds: regData.data.errors
            }
        })
        if (regData.data.isSuccessReg) {
            yield put(setRegistrationStatus(regData.data.isSuccessReg))
        }
    } catch (e: any) {
        yield put({
            type: CREATE_USER_FETCH_FAILED,
            payload: {
                message: e.message
            }
        })
    }
}

function* fetchLoginUser(action: AuthUserAction): any {
    try {
        const authData = yield call(authUser, action.payload)
        yield put({
            type: LOGIN_USER_FETCH_SUCCEEDED,
        })
        yield put({
            type: SET_LOGIN_ERRORS,
            payload: {
                errorIds: authData.data.errors
            }
        })
        if (authData.data.isSuccessAuth) {
            const nickname = authData.data.userData.nickname
            const id = authData.data.userData.id

            yield put(setAuthStatus(authData.data.isSuccessAuth))
            yield put(setUserData(nickname, id))

            localStorage.setItem('authStatus', 'true')
            localStorage.setItem('nickname', nickname)
            localStorage.setItem('id', id)
        }
    } catch (e: any) {
        yield put({
            type: LOGIN_USER_FETCH_FAILED,
            payload: {
                message: e.message
            }
        })
    }
}

function* fetchConnectRoom(action: CreateUserAction): any {
    try {
        const regData = yield call(createUser, action.payload)
        
    } catch (e: any) {
        yield put({
            type: CONNECT_ROOM_FETCH_FAILED,
            payload: {
                message: e.message
            }
        })
    }
}

export function* rootSaga() {
    yield takeEvery(CREATE_USER_FETCH_REQUESTED, fetchCreateUser)
    yield takeEvery(LOGIN_USER_FETCH_REQUESTED, fetchLoginUser)
    yield takeEvery(CONNECT_ROOM_FETCH_REQUESTED, fetchConnectRoom)
}

