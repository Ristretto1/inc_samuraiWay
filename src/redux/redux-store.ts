import {createStore, combineReducers} from 'redux'
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
})

export let store = createStore()