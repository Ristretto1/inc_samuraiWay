import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getProfile, setUserProfile} from '../../redux/profileReducer';
import {AppStateRootType} from '../../redux/redux-store';
import {ProfileType} from '../../redux/state';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';


type OwnPropsType = MapStatePropsType & DispatchPropsType

class ProfileContainer extends React.Component <PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = '2'
        this.props.getProfile(userId)
    }

    render() {
        return !this.props.isAuth
            ? <Redirect to={'/login'}/>
            : (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
export type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
export type DispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getProfile: (userId: string) => void
}


let mapStateToProps = (state: AppStateRootType): MapStatePropsType => ({
    profile: state.profile.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStatePropsType,
    DispatchPropsType,
    {},
    AppStateRootType>(mapStateToProps, {setUserProfile, getProfile})
(WithUrlDataContainerComponent)