import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>
    );

    let messagesElements = props.state.messagesData.map(
        message => <Message message={message.message} author={message.author}/>
    );

    let newMessageElement = React.createRef();

     let sendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
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
                    ref={newMessageElement}
                    placeholder='Write...'
                    value={props.state.newMessageText}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
};

export default Dialogs;