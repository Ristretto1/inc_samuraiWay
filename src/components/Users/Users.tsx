import React from 'react';
import {UserType} from '../../redux/users-reducer';
import s from './users.module.css'
import userPhoto from '../../assets/images/userPhoto.jpg'
import {NavLink} from 'react-router-dom'
import axios from 'axios';


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    unfollow: (id: number) => void
    follow: (id: number) => void
    onPageChanged: (p: number) => void
}

export const Users = (props: UsersPropsType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) pages.push(i)

    return (

        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span key={p} onClick={() => props.onPageChanged(p)}
                              className={props.currentPage === p && s.selected}>{p}</span>

                    )
                })}
            </div>
            {props.users.map((u: UserType) => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     className={s.userPhoto}/>
                                     </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '637c94b6-2976-409d-aeaf-9c0dbc46d0c9'
                                            }
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                    }}>unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '637c94b6-2976-409d-aeaf-9c0dbc46d0c9'
                                            }
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })

                                    }}>follow</button>}
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
}
