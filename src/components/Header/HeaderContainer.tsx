import React from 'react';
import {Header} from './Header';
import {AutInitialStateType, isAuthDispatch, setAuthUserData} from '../../redux/authReducer';
import {connect} from 'react-redux';
import {AppStateRootType} from '../../redux/redux-store';

type OwnPropsType = MapStatePropsType & MapDispatchType


class HeaderContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        this.props.isAuthDispatch()
    }

    render() {
        return <Header {...this.props}/>
    }

}

export type MapStatePropsType = {
    isAuth: boolean
    login: string
    email: string
}

export type MapDispatchType = {
    setAuthUserData: (data: AutInitialStateType) => void
    isAuthDispatch: () => void
}

const mapStateToProps = (state: AppStateRootType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
})


export default connect<MapStatePropsType, MapDispatchType, {}, AppStateRootType>(mapStateToProps, {setAuthUserData, isAuthDispatch})(HeaderContainer);

