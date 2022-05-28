import React, {ChangeEvent, createRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsType, ProfilePageType} from '../../../redux/store';
import {addPostAC, updateNewPostAC} from '../../../redux/profile-reducer';

type myPostsPropsType = {
    profilePage: ProfilePageType
    updateNewPostText: (text: string) => void
    addPost: () => void
}


const MyPosts: React.FC<myPostsPropsType> = (props) => {

    const posts = props.profilePage.myPosts.map((p) => {
        return <Post key={p.id} likes={p.likes} message={p.message}/>
    })


    let onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.profilePage.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;