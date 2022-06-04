export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small?: string
        large?: string
    }
    followed: boolean
    //location: { city: string, country: string }
}
//--------------------------------------------
type usersReducerActionType =
    followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
//---------------------------------------------
type followACType = ReturnType<typeof follow>
type unfollowACType = ReturnType<typeof unfollow>
type setUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
//---------------------------------------------
export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsers: number) => ({type: 'SET-TOTAL_COUNT', totalUsers} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

type InitialStateType = typeof initialState


export const usersReducer = (state: InitialStateType = initialState, action: usersReducerActionType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL_COUNT' :
            return {...state, totalUsersCount: action.totalUsers}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

