export type UserType = {
    id: number,
    followed: boolean
    fullName: string,
    status: string,
    location: { city: string, country: string }
}
//--------------------------------------------
type usersReducerActionType = followACType | unfollowACType
//---------------------------------------------
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
//---------------------------------------------
export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)


const initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Kirill', status: 'Hello!', location: {city: 'Surgut', country: 'Russia'}},
        {id: 2, followed: true, fullName: 'Ann', status: 'Krya!', location: {city: 'Sev', country: 'Ukraine'}},
        {
            id: 3,
            followed: false,
            fullName: 'Ivan',
            status: 'Zhopa koshki!',
            location: {city: 'Surgut', country: 'Russia'}
        }
    ]
}

export const usersReducer = (state: { users: Array<UserType> } = initialState, action: usersReducerActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, status: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, status: false} : u)}

        default:
            return state 
    }
}

