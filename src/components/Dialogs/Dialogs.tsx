import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/state';

type DialogsPropsType = {
    state: dialogsPageType
    dispatch: any
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {


    const dialogsElements = props.state.dialogs.map((d) => {
        return <DialogItem key={d.id} id={d.id} name={d.name}/>
    })

    const messagesElements = props.state.messages.map((m) => {
        return <Message message={m.message}/>
    })
    const newMessageBody = props.state.newMessageBody

    const onSendMessageClick = () => {props.dispatch(sendMessageCreator())    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
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
                            value={newMessageBody}
                            placeholder={'Enter your message'}
                            onChange={onNewMessageChange}
                        ></textarea>
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