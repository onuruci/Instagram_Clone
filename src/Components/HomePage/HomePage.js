import React from 'react';
import {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import Circular from './Circular';

const axios = require('axios');

const circularStyle = {
    marginTop: '10%',
    marginLeft: '47%',
    marginRight: 'auto',
    width: '100px',
    height: '100px'
}

const HomePage = () => {

    const [connected, setConnected] = useState(0);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [auth, setAuth] = useState(1);
    const [err, setErr] = useState(0);

    const [username, setUsername] = useState('');
 
    useEffect(() => {
        
        const getData = async () => {
            let res = await axios.get('http://localhost:3000/main-page',{
                'headers' : {
                    'Authorization': 'Bearer '+ localStorage.getItem('token')
                }
            });
            console.log(res);
            if(res.data.error === 1){
                setErr(1);
            }
            else {
                setUsername(res.data.authData.user.username);
            }
            
        }

        if(localStorage.getItem('token')){
            console.log('tokenexists');
            getData();
            if(err === 1){
                setAuth(0);
            }
            else{
                setConnected(1);
            }
        }
        else {
            setAuth(0);
            console.log('NO token');
        }
    }, [token]);

    const handleClick = async () => {

        
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(localStorage.getItem('token'));
        console.log(localStorage.getItem('token'));
    };
    return(
        <div>
            {connected === 1 ? <div>
                <h1>
                    Hello
                </h1>
                <h1>
                    Welcome to Homepage
                </h1>
                <h2>
                    {username}
                </h2>
                <button onClick={handleClick}>
                    AAA
                </button>
                <button onClick={handleLogout}>
                    Log out
                </button>
            </div> : <CircularProgress style={circularStyle}/>}
            {auth === 1 ? null : <Redirect to='/'/>}
        </div>
    )
}

export default HomePage;