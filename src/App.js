import React from 'react';
import {useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignUp from "./Components/SignUp/SignUp";
import LogIn from "./Components/LogIn/LogIn";
import HomePage from "./Components/HomePage/HomePage";
import UserPage from "./Components/UserPage/UserPage";
import ProfilePage from './Components/ProfilePage/ProfilePage';

import './index.css';

function App() {

  const [currentUserId, setCurrentUserId] = useState('');
  const [currentUserName, setCurrentUserName] = useState(''); 

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <LogIn/>
        </Route>
        <Route exact path="/signup">
            <SignUp/>
        </Route>
        <Route exact path="/home">
            <HomePage
            currentUserId={currentUserId}
            currentUserName={currentUserName}
            setCurrentUserId={setCurrentUserId}
            setCurrentUserName={setCurrentUserName}/>
        </Route>
        <Route exact path="/user/:username">
            <UserPage
            currentUserId={currentUserId}
            currentUserName={currentUserName}
            setCurrentUserId={setCurrentUserId}
            setCurrentUserName={setCurrentUserName}/>
        </Route>
        <Route exact path="/profile">
          <ProfilePage/>  
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
