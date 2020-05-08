import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps  = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);