import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getStatus, getUserProfile, ProfileType, updateStatus} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) userID = this.props.authorizedUserId

        this.props.getUserProfile(userID)
        this.props.getStatus(userID)
    }

    render() {


        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
};

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: string
}

type mapDispatchToPropsType = {
    getUserProfile: (userID: string) => void
    getStatus: (userID: string) => void
    updateStatus: (newStatus: string) => void
}


const mapStateToProps = (state: AppStateType): { isAuth: boolean; authorizedUserId: number | null; profile: ProfileType | null; status: string } => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

type PathParamsType = {
    userID: string
}

type ProfilePropsType = RouteComponentProps<PathParamsType> & mapStateToPropsType & mapDispatchToPropsType

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
)(ProfileContainer)