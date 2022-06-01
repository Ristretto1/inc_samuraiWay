import {UserType} from './users-reducer';

export type DialogsType = {
    id: number,
    name: string
}
export type MessagesType = {
    id: number,
    message: string
}
export type MyPostsType = {
    id: number,
    message: string,
    likes: number
}
export type FriendsType = {
    id: number,
    img: string,
    name: string
}
//-------------------------------------------//


export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>,
    newMessageBody: string
}
export type ProfilePageType = {
    myPosts: Array<MyPostsType>,
    newPostText: string
}
export type SidebarType = {
    friends: Array<FriendsType>
}
//-------------------------------------------//


export type StateType = {
    dialogsPage: DialogsPageType,
    profilePage: ProfilePageType,
    sidebar: SidebarType,
    usersPage: {
        currentPage: number;
        totalUsersCount: number;
        pageSize: number;
        users: Array<UserType>}
}

// export type StoreType = {
//     _state: StateType
//     _renderedEntireTree: (state:StateType) => void
//     getState: () => StateType
//     subscribe:(observer: (state: StateType) => void) => void
//     dispatch: (action: AddPostActionType|SendMessageActionType|UpdateNewPostActionType|updateNewMessageBodyActionType) => void
// }

// export type AddPostActionType = ReturnType<typeof addPostAC>
// export type SendMessageActionType = ReturnType<typeof sendMessageAC>
// export type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>
// export type updateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
//-------------------------------------------//

// export let store: StoreType = {
//     _state: {
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Kirill'},
//                 {id: 2, name: 'Dima'},
//                 {id: 3, name: 'Anya'},
//                 {id: 4, name: 'Ivan'},
//                 {id: 5, name: 'Sveta'},
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'HIHI'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'YoYo'},
//             ],
//             newMessageBody: ''
//         },
//         profilePage: {
//             myPosts: [
//                 {id: 1, message: 'Hi, how are you?', likes: 15},
//                 {id: 2, message: 'It is your first post', likes: 20},
//                 {id: 3, message: 'It is your second post', likes: 30}
//             ],
//             newPostText: ''
//         },
//         sidebar: {
//             friends: [
//                 {
//                     id: 1,
//                     img: 'https://love-is.org/wp-content/uploads/2019/04/kakie-devushki-nravyatsya-parnyam-7.jpg',
//                     name: 'Sveta'
//                 },
//                 {
//                     id: 2,
//                     img: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612323895_80-p-foto-devushki-na-korichnevom-fone-128.jpg',
//                     name: 'Yulya'
//                 },
//                 {
//                     id: 3,
//                     img: 'https://vintic.name/uploads/posts/2021-08/1629740068_29-vintic-name-p-nastoyashchie-blondinki-vkontakte-krasivie-33.jpg',
//                     name: 'Anya'
//                 },
//
//             ]
//         }
//     },
//     _renderedEntireTree(state: StateType) {
//         console.log(state)
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(callback) {
//         this._renderedEntireTree = callback
//     },
//
//     dispatch(action: any) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//         this._renderedEntireTree(this._state)
//     }
//
// }

//-------------------------------------------//


