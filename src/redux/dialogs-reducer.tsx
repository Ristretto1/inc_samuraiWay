import {DialogsPageType, MessagesType, MyPostsType, StateType} from './store';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
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
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            return {...state, messages: [...state.messages, {id: 6, message: state.newMessageBody}], newMessageBody: ''}
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}