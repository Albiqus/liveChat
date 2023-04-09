import { call, put, takeEvery } from 'redux-saga/effects'
import { CREATE_USER_FETCH_FAILED, CREATE_USER_FETCH_REQUESTED, CREATE_USER_FETCH_SUCCEEDED, SET_REGISTRATION_ERRORS } from '../data/actionTypes'
import { createUser } from '../api/Registration/createUser'
import { CreateUserAction } from '../types/Registration/CreateUserAction'


function* fetchCreateUser(action: CreateUserAction): any {
    try {
        const regStatus = yield call(createUser, action.payload)
        yield put({
            type: CREATE_USER_FETCH_SUCCEEDED,
        })
        yield put({
            type: SET_REGISTRATION_ERRORS,
            payload: {
                errors: regStatus.data.errors
            }
        })
    } catch (e: any) {
        yield put({
            type: CREATE_USER_FETCH_FAILED,
            payload: {
                message: e.message
            }
        })
    }
}

export function* saga() {
    yield takeEvery(CREATE_USER_FETCH_REQUESTED, fetchCreateUser)
}
