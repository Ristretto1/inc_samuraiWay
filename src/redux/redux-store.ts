import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import autReducer from './authReducer';
import thunkMiddleWare from 'redux-thunk'


export const rootReducer = combineReducers({
    auth: autReducer,
    profile: profileReducer,
    dialogs: dialogReducer,
    users: usersReducer
})

export type AppStateRootType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))
export type StoreAppType = typeof store

