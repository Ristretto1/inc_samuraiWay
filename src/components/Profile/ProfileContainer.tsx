import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import {StateType} from '../../redux/store';


type ProfileContainerPropsType = {
}


class ProfileContainer extends React.Component<any, any> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId

        if(!userId) userId = 2

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render(): React.ReactNode {
    return (
        <div>
            <Profile {...this.props} profile={this.props.profile}/>

        </div>
    );
}
};

type PathParamsType = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & {

}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)