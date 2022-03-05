import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    type myPostsType = {
        id: number,
        message: string,
        likes: number
    }

    let myPosts: Array<myPostsType> = [
        {id: 1, message: 'Hi, how are you?', likes: 15},
        {id: 2, message: 'It is your first post', likes: 20},
        {id: 2, message: 'It is your second post', likes: 30}
    ]

    let posts = myPosts.map((p) => {
        return <Post key={p.id} likes={p.likes} message={p.message}/>
    })

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
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;