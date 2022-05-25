import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType, DialogsType, MessagesType} from '../../redux/store';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    onNewMessageChange: (body: string) => void
    onSendMessageClick: () => void
    newMessageBody: string
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {


    const dialogsElements = props.dialogs.map((d) => {
        return <DialogItem key={d.id} id={d.id} name={d.name}/>
    })

    const messagesElements = props.messages.map((m) => {
        return <Message message={m.message}/>
    })

    const onSendMessageClick = () => props.onSendMessageClick()

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.onNewMessageChange(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messagesItems}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={props.newMessageBody}
                            placeholder={'Enter your message'}
                            onChange={onNewMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;