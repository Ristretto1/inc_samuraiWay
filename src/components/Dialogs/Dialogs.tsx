import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from 'react-router-dom'


export const Dialogs: React.FC<DialogsPropsType> = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.dialogs
        .map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>);

    let messagesElements = props.dialogs.messages
        .map(m => <Message message={m.message} key={m.id}/>);

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessage(e.currentTarget.value)
    }

    return !props.isAuth
        ? <Redirect to={'/login'}/>
        : (
            <div className={s.dialogs}>
                <div className={s.dialogs__items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <textarea
                        onChange={onNewMessageChange}
                        value={props.dialogs.newMessageBody}
                    />
                    <button onClick={onSendMessageClick}>Send</button>
                </div>

            </div>
        )
}
