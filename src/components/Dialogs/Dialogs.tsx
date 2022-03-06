import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: dialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.state.dialogs.map((d) => {
        return <DialogItem key={d.id} id={d.id} name={d.name}/>
    })

    let messagesElements = props.state.messages.map((m) => {
        return <Message message={m.message}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messagesItems}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;