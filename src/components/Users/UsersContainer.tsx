import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {StateType} from '../../redux/store';
import {followAC, setUsersAC, unfollowAC, UserType} from '../../redux/users-reducer';

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users )

