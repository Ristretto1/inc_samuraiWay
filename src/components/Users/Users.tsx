import React, {FC} from 'react';
import {UserType} from '../../redux/users-reducer';
import s from './users.module.css'

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users: FC<UsersPropsType> = ({users, unfollow, follow, setUsers}) => {
    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                photoURL: 'https://img.informer.com/icons/png/128/6243/6243528.png',
                followed: false,
                fullName: 'Kirill',
                status: 'Hello!',
                location: {city: 'Surgut', country: 'Russia'}
            },
            {
                id: 2,
                photoURL: 'https://img.informer.com/icons/png/128/6243/6243528.png',
                followed: true,
                fullName: 'Ann',
                status: 'Krya!',
                location: {city: 'Sev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoURL: 'https://img.informer.com/icons/png/128/6243/6243528.png', followed: false,
                fullName: 'Ivan',
                status: 'Zhopa koshki!',
                location: {city: 'Surgut', country: 'Russia'}
            }
        ])
    }
    return (
        <div>
            {users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div><img src={u.photoURL} className={s.userPhoto}/></div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => unfollow(u.id)}>unfollow</button>
                                    : <button onClick={() => follow(u.id)}>follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )

            })}
        </div>
    );
};

