import React, {ChangeEvent, createRef} from 'react';

import {addPostAC, updateNewPostAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/store';

type myPostsPropsType = {}

let mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => dispatch(addPostAC()),
        updateNewPostText: (text: string) => dispatch(updateNewPostAC(text))
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;