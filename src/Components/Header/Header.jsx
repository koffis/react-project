import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
        <img src='https://lh6.googleusercontent.com/proxy/UG_86gP2YmS1sOxQSxVoZuBi5dPG0cNFW2bVCqEYXVqgsFjxNokIIDsClG5sbbT06D9CQsAucYl1JfAdjtO0oxj5_E1CGB3c2qAWN5NZ5PSxxrs' />
        <div className={s.loginBlock}>
            {
                props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
            }

        </div>
      </header>
    )
};

export default Header;