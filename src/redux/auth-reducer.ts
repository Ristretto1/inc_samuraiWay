//--------------------------------------------
type authReducerActionType =
    setUserDataACType

//---------------------------------------------
type setUserDataACType = ReturnType<typeof setUserData>

//---------------------------------------------
export const setUserData = (id: number, email: string, login: string, isAuth: boolean) => ({type: 'SET-USER-DATA', payload: {id, email, login, isAuth}} as const)


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
            return {...state, ...action.payload, isAuth: true}
        default:
            return state
    }
}

