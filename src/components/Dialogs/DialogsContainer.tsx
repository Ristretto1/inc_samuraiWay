import React from 'react';

import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
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
        onNewMessageChange: (body: string) => {dispatch(updateNewMessageBodyAC(body))},
        onSendMessageClick: () => {dispatch(sendMessageAC())},
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;