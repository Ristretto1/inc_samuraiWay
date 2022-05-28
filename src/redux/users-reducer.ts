export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    //location: { city: string, country: string }
}
//--------------------------------------------
type usersReducerActionType = followACType | unfollowACType | setUsersACType
//---------------------------------------------
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
//---------------------------------------------
export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)


const initialState = {
    users: []
}

export const usersReducer = (state: { users: Array<UserType> } = initialState, action: usersReducerActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}

