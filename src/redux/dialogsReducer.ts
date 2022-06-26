import {ActionsType} from './profileReducer';

export type MessagesPageType = {
    messages: PropsMessageType[]
    dialogs: PropsDialogType[]
}

export type PropsDialogType = {
    id: number
    name: string
}
export type PropsMessageType = {
    id?: number
    message: string
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'}
    ] as PropsDialogType[],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Ha-ha'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'How is your samurai-way?'}
    ] as unknown as PropsMessageType[]
}

export type InitialStateType = typeof initialState

const dialogReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage: PropsMessageType = {
                id: new Date().getTime(),
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
}

export type SendMessageActionType = ReturnType<typeof SendMessageActionCreator>

export const SendMessageActionCreator = (formData: string) => {
    return {
        type: 'SEND-MESSAGE',
        newMessageBody: formData
    } as const
}

export default dialogReducer;