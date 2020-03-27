import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom'
import OnlineFriends from "./OnlineFriends/OnlineFriends";

const Nav = (props) => {

    let friendsOnline = props.state.onlineFriends.map(
        online => <OnlineFriends id={online.id} name={online.name} avatar={online.avatar} onlineStatus={online.onlineStatus}/>
    );

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.activeLink}><h3>Friends</h3></NavLink>
                <div className={s.online}>
                    {friendsOnline}
                </div>
            </div>
        </nav>
    )
};

export default Nav;