import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Nav';
import Content from './Components/Profile/Content';
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav state={props.state.sideBar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Content
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />}/>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                {/*
                    <Route path='/friends' render={() => <Friends/>}/>
*/}
            </div>
        </div>

    );
};


export default App;
