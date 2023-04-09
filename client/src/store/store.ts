import { registration } from './reducers/registrationReducer';
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { saga } from '../sagas/sagas';


const sagaMiddleware = createSagaMiddleware()

let reducers = combineReducers({
    registration
})

let store = legacy_createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)

export { store }
export type RootState = ReturnType<typeof store.getState>