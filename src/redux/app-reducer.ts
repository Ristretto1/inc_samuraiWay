import {AppThunk} from './redux-store';
import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type AppStateType = {
    initialized: boolean,
}

const initialState: AppStateType = {
    initialized: false,
}

export const appReducer = (state: AppStateType = initialState, action: AppActionType): AppStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS': {
            return {...state, initialized: true}
        }

        default: {
            return state
        }
    }
}

export type setInitializedType = ReturnType<typeof initializedSuccess>
export type AppActionType = setInitializedType


export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const
}

export const initializeApp = (): AppThunk => async (dispatch) => {
    await dispatch(getAuthUserData)
    dispatch(initializedSuccess)


}

// export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch: any) => {
//
//     authAPI.login(email, password, rememberMe)
//         .then(response => {
//             debugger
//             if (response.data.resultCode === 0) {
//                 dispatch(getAuthUserData())
//             } else {
//                 let message = response.data.messages > 0 ? response.data.messages[0] : 'some error'
//                 dispatch(stopSubmit('login', {_error: message}))
//             }
//         })
//         .catch(err => console.log(err))
// }
//
// export const logout = (): AppThunk => (dispatch) => {
//     authAPI.logout()
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(setAuthUserData(null, null, null, false))
//             }
//         })
// }
