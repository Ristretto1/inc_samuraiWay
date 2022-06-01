import React, {FC} from 'react';
import {UserType} from '../../redux/users-reducer';
import s from './users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/images/userPhoto.jpg'

export class Users extends React.Component<any, any> {
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => this.props.setUsers(response.data.items))
    }

    render(): React.ReactNode {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) pages.push(i)

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return (
                            <span onClick={() => this.onPageChanged(p)}
                                  className={this.props.currentPage === p && s.selected}>{p}</span>

                        )
                    })}
                </div>
                {this.props.users.map((u: UserType) => {
                    return (
                        <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     className={s.userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)}>unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>follow</button>}
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
}