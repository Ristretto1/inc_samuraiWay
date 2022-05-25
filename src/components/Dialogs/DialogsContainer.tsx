import React from 'react';

import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {StateType} from '../../redux/store';

type DialogsPropsType = {}

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        onNewMessageChange: (body: string) => {dispatch(updateNewMessageBodyCreator(body))},
        onSendMessageClick: () => {dispatch(sendMessageCreator())},
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;