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
            const newPost: MyPostsType = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            let stateCopy = {...state}
            stateCopy.myPosts = [...state.myPosts]
            stateCopy.myPosts.push(newPost);
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
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