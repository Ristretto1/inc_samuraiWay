import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow,
    UsersDataType
} from '../../redux/usersReducer';
import {AppStateRootType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';


type MapStateToPropsType = {
    users: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);
    }


    render() {


        return <>
            {
                this.props.isFetching ?
                <Preloader/>
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}

const mapStateToProps = (state: AppStateRootType): MapStateToPropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress

    }
}


export default connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers
})(UsersContainer);