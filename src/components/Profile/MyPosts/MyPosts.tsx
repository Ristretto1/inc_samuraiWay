import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    type myPostsDataType = {
        id: number,
        message: string,
        likes: number
    }

    let myPostsData: Array<myPostsDataType> = [
        {id: 1, message: 'Hi, how are you?', likes: 15},
        {id: 2, message: 'It is your first post', likes: 20}
    ]

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>

            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post likes={myPostsData[0].likes} message={myPostsData[0].message}/>
                <Post likes={myPostsData[1].likes} message={myPostsData[1].message}/>
            </div>
        </div>
    );
};

export default MyPosts;