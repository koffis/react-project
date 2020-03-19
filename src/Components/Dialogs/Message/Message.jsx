import React from "react";
import s from "./Message.module.css"

const Message = (props) => {
    if (props.author === 1) {
        return (
            <div className={s.myMessage}>{props.message}</div>
        )
    } else {
        return (
            <div className={s.friendMessage}>{props.message}</div>
        )
    }
};

export default Message;