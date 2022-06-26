import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from 'react-router-dom'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.dialogs
        .map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>);

    let messagesElements = props.dialogs.messages
        .map(m => <Message message={m.message} key={m.id}/>);

    const AddNewMessage = (formData: DialogsFormDataType) => {
        props.sendMessage(formData.newMessageBody)
    }

    return !props.isAuth
        ? <Redirect to={'/login'}/>
        : (
            <div className={s.dialogs}>
                <div className={s.dialogs__items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <AddMessageFromRedux onSubmit={AddNewMessage}/>
                </div>
            </div>
        )
}

export type DialogsFormDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props ) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newMessageBody'}
                    placeholder={'Enter your message'}
                />
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFromRedux = reduxForm<DialogsFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

