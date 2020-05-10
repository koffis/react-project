import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validator";

const maxLength100 = maxLengthCreator(100);

const DialogsForm = (props) => {
    return (
        <div className={s.messageTextArea}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder='Write...' name={'newMessageBody'} component={Textarea}
                        validate={[required, maxLength100]}
                    />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
};

const DialogsReduxForm = reduxForm({form: 'messages'})(DialogsForm);

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>
    );

    let messagesElements = props.messagesData.map(
        message => <Message message={message.message} author={message.author}/>
    );

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.message}>
                {messagesElements}
            </div>
            <DialogsReduxForm onSubmit={addNewMessage}/>
        </div>
    )
};

export default Dialogs;