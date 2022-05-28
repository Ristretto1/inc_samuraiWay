import {DialogsPageType} from './store';

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
//-------------------
type dialogsReducerActionType = sendMessageACType | updateNewMessageBodyACType
//-------------------
type sendMessageACType = ReturnType<typeof sendMessageAC>
type updateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>
//-------------------
export const sendMessageAC = () => ({type: 'SEND-MESSAGE'} as const)
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}
//-------------------

export const dialogsReducer = (state: DialogsPageType = initialState, action: dialogsReducerActionType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {...state, newMessageBody: action.body}
        case 'SEND-MESSAGE':
            return {...state, messages: [...state.messages, {id: 6, message: state.newMessageBody}], newMessageBody: ''}
        default:
            return state
    }
}

