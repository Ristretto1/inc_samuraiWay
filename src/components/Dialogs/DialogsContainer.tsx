import React from 'react';
import {MessagesPageType, SendMessageActionCreator} from '../../redux/dialogsReducer';
import {AppStateRootType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {withAuthRedirectComponent} from '../../hoc/withAuthRedirect';


type mapStateToProps = {
    dialogs: MessagesPageType
    isAuth: boolean
}

type mapDispatchToProps = {
    sendMessage: (formData: string) => void
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
        sendMessage: (formData: string) => {
            dispatch(SendMessageActionCreator(formData))
        }
    }
}



export const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirectComponent)(Dialogs)