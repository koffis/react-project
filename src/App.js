import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Nav';
import Content from './Components/Profile/Content';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={props.state.sideBar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Content state={props.state.profilePage}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
{/*
                    <Route path='/friends' render={() => <Friends/>}/>
*/}
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
