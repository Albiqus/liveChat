import { homePage } from './reducers/homePageReducer';
import { login } from './reducers/loginReducer';
import { registration } from './reducers/registrationReducer';
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../sagas/sagas';


const sagaMiddleware = createSagaMiddleware()

let reducers = combineReducers({
    registration,
    login,
    homePage
})

let store = legacy_createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export { store }
export type RootState = ReturnType<typeof store.getState>