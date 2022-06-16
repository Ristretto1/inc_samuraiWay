import React from 'react';
import {ChangeNewMessageActionCreator, MessagesPageType, SendMessageActionCreator} from '../../redux/dialogsReducer';
import {AppStateRootType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Redirect} from 'react-router-dom';
import {withAuthRedirectComponent} from '../../hoc/withAuthRedirect';


type mapStateToProps = {
    dialogs: MessagesPageType
    isAuth: boolean
}

type mapDispatchToProps = {
    changeNewMessage: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = mapStateToProps & mapDispatchToProps


let mapStateToProps = (state: AppStateRootType): mapStateToProps => {
    return {
        dialogs: state.dialogs,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeNewMessage: (body: string) => {
            dispatch(ChangeNewMessageActionCreator(body))
        },
        sendMessage: () => {
            dispatch(SendMessageActionCreator())
        }
    }
}

const AuthRedirectComponent = withAuthRedirectComponent(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
