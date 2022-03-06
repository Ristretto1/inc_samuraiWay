import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsType, messagesType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>
}

const Dialogs = (props: DialogsPropsType) => {



    let dialogsElements = props.dialogs.map((d)=>{
        return <DialogItem key={d.id} id={d.id} name={d.name}/>
    })

    let messagesElements = props.messages.map((m) => {
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