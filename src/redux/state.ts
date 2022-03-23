import {renderedEntireTree} from "../render";

export type dialogsType = {
    id: number,
    name: string
}
export type messagesType = {
    id: number,
    message: string
}
export type myPostsType = {
    id: number,
    message: string,
    likes: number
}
export type friendsType = {
    id: number,
    img: string,
    name: string
}
//-------------------------------------------//


export type dialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>,
}
export type profilePageType = {
    myPosts: Array<myPostsType>,
    newPostText:string
}
export type sidebarType = {
    friends: Array<friendsType>
}
//-------------------------------------------//


export type stateType = {
    dialogsPage: dialogsPageType,
    profilePage: profilePageType,
    sidebar: sidebarType,

}
//-------------------------------------------//


let state: stateType = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Kirill'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Anya'},
            {id: 4, name: 'Ivan'},
            {id: 5, name: 'Sveta'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'HIHI'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'YoYo'},
        ],
    },
    profilePage: {
        myPosts: [
            {id: 1, message: 'Hi, how are you?', likes: 15},
            {id: 2, message: 'It is your first post', likes: 20},
            {id: 3, message: 'It is your second post', likes: 30}
        ],
        newPostText: ''
    },
    sidebar: {
        friends: [
            {
                id: 1,
                img: 'https://love-is.org/wp-content/uploads/2019/04/kakie-devushki-nravyatsya-parnyam-7.jpg',
                name: 'Sveta'
            },
            {
                id: 2,
                img: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612323895_80-p-foto-devushki-na-korichnevom-fone-128.jpg',
                name: 'Yulya'
            },
            {
                id: 3,
                img: 'https://vintic.name/uploads/posts/2021-08/1629740068_29-vintic-name-p-nastoyashchie-blondinki-vkontakte-krasivie-33.jpg',
                name: 'Anya'
            },

        ]
    }
}

export const addPost = () => {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.myPosts.push(newPost);
    state.profilePage.newPostText = ''
    renderedEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderedEntireTree(state)
}

export default state;