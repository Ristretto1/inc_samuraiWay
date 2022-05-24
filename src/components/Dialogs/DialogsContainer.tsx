import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redux/store';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
store: any
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {


    const dialogsElements = props.state.dialogs.map((d) => {
        return <DialogItem key={d.id} id={d.id} name={d.name}/>
    })

    const messagesElements = props.state.messages.map((m) => {
        return <Message message={m.message}/>
    })
    const newMessageBody = props.state.newMessageBody

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs state={} dispatch={}/>
    );
};

export default Dialogs;