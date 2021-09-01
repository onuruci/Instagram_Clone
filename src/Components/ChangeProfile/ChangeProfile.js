import React from 'react';
import {useState, useEffect} from 'react';

import NavBar from '../Nav/NavBar';

const axios = require('axios');

const bodyStyle = {
    width: '980px',
    margin: '80px auto 0 auto',
    minHeight: '1000px',
    height: 'auto'
}

const ChangeProfile = () => {
    const [currentUserId, setCurrentUserId] = useState('');
    const [currentUserName, setCurrentUserName] = useState('');
    const [err, setErr] = useState(0);
    const [auth, setAuth] = useState(1);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [noUser, setNoUser] = useState(0);
    const [posted, setPosted] = useState(0);

    const [file, setFile] = useState('');
    const [paragraph, setParagraph] = useState('');

    useEffect(() => {
        
        const getData = async () => {
            let res = await axios.get('http://localhost:3000/main-page',{
                'headers' : {
                    'Authorization': 'Bearer '+ localStorage.getItem('token')
                }
            });
            if(res.data.err === 1){
                setErr(1);
            }
            else{
                setCurrentUserId(res.data.authData.user._id);
            }
        }


        if(localStorage.getItem('token')){
            console.log('tokenexists');
            getData();
            if(err === 1){
                setAuth(0);
            }
            else{
                setAuth(1);
            }
        }
        else {
            setAuth(0);
        }
    },[]);

    return(
        <div>
            <NavBar
            currentUserId={currentUserId}
            currentUserName={currentUserName}/>
            <div style={bodyStyle}>
                <h1>
                    Change Profile
                </h1>
            </div>   
        </div>
    );
}

export default ChangeProfile;