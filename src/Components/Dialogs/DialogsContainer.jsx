import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps  = (state) => {
    return {
        newMessageText: state.profilePage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData
    }
};

let mapDispatchToProps  = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        } ,
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;