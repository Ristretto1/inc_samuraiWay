import React, {ChangeEvent, createRef} from 'react';

import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

type myPostsPropsType = {}


const MyPostsContainer: React.FC<myPostsPropsType> = (props) => {


    return (
        <StoreContext.Consumer>
            {store => {
                let addPost = () => {
                    if(store) store.dispatch(addPostActionCreator())
                }

                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostActionCreator(text))
                }
                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        myPosts={store.getState().profilePage.myPosts}
                        newPostText={store.getState().profilePage.newPostText}
                    />
                )
            }
            }

        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;