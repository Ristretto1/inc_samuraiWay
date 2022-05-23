import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {StateType, StoreType} from './redux/store';

type AppPropsType = {
    store: StoreType
    dispatch: any
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        dispatch={props.dispatch}
                        profilePage={state.profilePage}
                    />}/>
                    <Route path="/dialogs" render={() => <Dialogs state={state.dialogsPage}
                                                                  dispatch={props.dispatch}
                    />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
