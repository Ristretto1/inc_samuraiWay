import React from 'react';

import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

type DialogsPropsType = {

}

const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
    const newMessageBody = props.store.getState().newMessageBody

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs
            onNewMessageChange={onNewMessageChange}
            onSendMessageClick={onSendMessageClick}
            newMessageBody={newMessageBody}
            dialogs={props.store.getState().dialogs}
            messages={props.store.getState().messages}
        />
    );
};

export default DialogsContainer;