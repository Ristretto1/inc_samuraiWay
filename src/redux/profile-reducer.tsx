import {ProfilePageType} from './store';

const initialState = {
    myPosts: [
        {id: 1, message: 'Hi, how are you?', likes: 15},
        {id: 2, message: 'It is your first post', likes: 20},
        {id: 3, message: 'It is your second post', likes: 30}
    ],
    newPostText: ''
}

//------------------------
type profileReducerActionType = addPostACType | updateNewPostACType
//------------------------
type addPostACType = ReturnType<typeof addPostAC>
type updateNewPostACType = ReturnType<typeof updateNewPostAC>
//------------------------
export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}
//------------------------

export const profileReducer = (state: ProfilePageType = initialState, action: profileReducerActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                myPosts: [...state.myPosts, {id: 5, message: state.newPostText, likes: 0}],
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }
        default:
            return state
    }
}
