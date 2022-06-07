//--------------------------------------------
type authReducerActionType =
    setUserDataACType

//---------------------------------------------
type setUserDataACType = ReturnType<typeof setUserData>

//---------------------------------------------
export const setUserData = (data: InitialStateType) => ({type: 'SET-USER-DATA', data} as const)


const initialState = {

        id: null,
        email: null,
        login: null,
        isAuth: false

}

type InitialStateType = typeof initialState


export const authReducer = (state: InitialStateType = initialState, action: authReducerActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

