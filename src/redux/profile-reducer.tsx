import {MessagesType, MyPostsType, ProfilePageType, StateType} from './state';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state: ProfilePageType, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: MyPostsType = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            state.myPosts.push(newPost);
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
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