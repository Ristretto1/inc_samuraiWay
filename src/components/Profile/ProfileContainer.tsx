import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getProfile, getStatus, setUserProfile, updateStatus} from '../../redux/profileReducer';
import {AppStateRootType} from '../../redux/redux-store';
import {ProfileType} from '../../redux/state';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirectComponent} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


type OwnPropsType = MapStatePropsType & DispatchPropsType

class ProfileContainer extends React.Component <PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = '24024'
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
        />
    }
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
export type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
    status: string
}
export type DispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getProfile: (userId: string) => void
    getStatus: (status: string) => void
    updateStatus: (status: string) => void
}


let mapStateToProps = (state: AppStateRootType): { isAuth: boolean; profile: ProfileType | null; status: string } => ({
    profile: state.profile.profile,
    isAuth: state.auth.isAuth,
    status: state.profile.status
});


export default compose<React.ComponentType>(
    connect<MapStatePropsType,
        DispatchPropsType,
        {},
        AppStateRootType>(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer)
