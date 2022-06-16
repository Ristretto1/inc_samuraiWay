import {Redirect} from 'react-router-dom';
import React from 'react';
import {AppStateRootType} from '../redux/redux-store';
import {connect} from 'react-redux';

let mapStateToPropsForRedirect = (state: AppStateRootType) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirectComponent = (Component: any) => {

    class RedirectComponent extends React.Component<any, any> {
        render(): React.ReactNode {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}