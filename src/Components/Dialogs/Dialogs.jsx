import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>
    );

    let messagesElements = props.messagesData.map(
        message => <Message message={message.message} author={message.author}/>
    );


     let sendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.message}>
                {messagesElements}
            </div>
            <div className={s.messageTextArea}>
                <textarea
                    onChange={onMessageChange}
                    placeholder='Write...'
                    value={props.newMessageText}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
};

export default Dialogs;