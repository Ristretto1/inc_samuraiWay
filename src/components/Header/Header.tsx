import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

type HeaderType = {
    isAuth: boolean
    login: string
}

const Header = (props: HeaderType) => {

    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png"
                alt=""/>

            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login}</div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;