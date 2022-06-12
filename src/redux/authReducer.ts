import {headerAPI, usersAPI} from '../api/api';
import {toggleIsFollowingProgress, unfollowSuccess} from './usersReducer';

export type ActionsType = SetUserDataActionType


export type SetUserDataActionType = ReturnType<typeof setAuthUserData>


export type AutInitialStateType = {
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
}

const initialState: AutInitialStateType = {
    userId: 1,
    email: "pavel@mail.ru",
    login: "pavel",
    isAuth: false
}


export const setAuthUserData = (data: AutInitialStateType) => {
    return {
        type: 'SET_USER_DATA',
        data
    } as const
}


const autReducer = (state: AutInitialStateType = initialState, action: ActionsType): AutInitialStateType => {

    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }


        default:
            return state;
    }
}

export const isAuthDispatch = () => {
    return (dispatch: any) => {
        headerAPI.isAuthDispatch()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(response.data.data))
                }
            })
    }
}


export default autReducer;