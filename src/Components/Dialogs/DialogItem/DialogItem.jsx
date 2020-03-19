import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <img alt='dog' src={props.avatar}/>
            <NavLink to={path}>{props.name}</NavLink>
            <hr/>
        </div>
    )
};

export default DialogItem;