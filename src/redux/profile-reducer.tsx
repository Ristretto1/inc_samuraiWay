import {MessagesType, MyPostsType, ProfilePageType, StateType} from './store';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    myPosts: [
        {id: 1, message: 'Hi, how are you?', likes: 15},
        {id: 2, message: 'It is your first post', likes: 20},
        {id: 3, message: 'It is your second post', likes: 30}
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                myPosts: [...state.myPosts, {id: 5, message: state.newPostText, likes: 0}],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}