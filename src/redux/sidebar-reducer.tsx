import {SidebarType, StateType} from './store';

const initialState = {
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

export const sidebarReducer = (state: SidebarType = initialState, action: any) => {


    return state
}