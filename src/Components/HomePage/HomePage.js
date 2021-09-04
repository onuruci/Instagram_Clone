import React from 'react';
import {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import Circular from './Circular';

import NavBar from '../Nav/NavBar';

const axios = require('axios');

const circularStyle = {
    marginTop: '10%',
    marginLeft: '47%',
    marginRight: 'auto',
    width: '100px',
    height: '100px'
}

const bodyStyle = {
    width: '980px',
    margin: '80px auto 0 auto',
    minHeight: '1000px',
    height: 'auto'
}

const HomePage = () => {

    const [connected, setConnected] = useState(0);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [auth, setAuth] = useState(1);
    const [err, setErr] = useState(0);

    const [userid, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [arr, setArr] = useState([]);
 
    useEffect(() => {
        
        const getData = async () => {
            let res = await axios.get('http://localhost:3000/homepage',{
                'headers' : {
                    'Authorization': 'Bearer '+ localStorage.getItem('token')
                }
            });
            console.log(res);
            if(res.data.error === 1){
                setErr(1);
            }
            else {
                setUserId(res.data.authData.user._id);
                setUsername(res.data.authData.user.username);
                setArr(res.data.arr);
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
            <NavBar
            currentUserId={userid}
            currentUserName={username}/>
            <div style={bodyStyle}>
                {connected === 1 ? <div>
                    {
                        arr.map(e => {
                            console.log(e);
                            return <div key={e._id}>
                                        <img src={"http://localhost:3000/public/users/"+e.owner+'/posts/'+e._id+'.png'} alt="" srcset="" />
                                    </div>
                        })
                    }
                </div> : <CircularProgress style={circularStyle}/>}
            </div>
            {auth === 1 ? null : <Redirect to='/'/>}
        </div>
    )
}

export default HomePage;