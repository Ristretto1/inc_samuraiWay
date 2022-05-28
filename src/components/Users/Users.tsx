import React, {FC} from 'react';
import {UserType} from '../../redux/users-reducer';
import s from './users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/images/userPhoto.jpg'


type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users: FC<UsersPropsType> = ({users, unfollow, follow, setUsers}) => {
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => setUsers(response.data.items))
    }
    return (
        <div>
            {users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div><img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/></div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => unfollow(u.id)}>unfollow</button>
                                    : <button onClick={() => follow(u.id)}>follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </div>
                )

            })}
        </div>
    );
};

