import React from 'react';
import {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import Circular from './Circular';

import NavBar from '../Nav/NavBar';
import HomePost from './HomePost';

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

const loadingDivStyle = {
    width: '100%',
    textAlign: 'center'
}

const loaderStyle = {
    margin: '400px 0 0 0'
}

const HomePage = () => {

    const [connected, setConnected] = useState(0);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [auth, setAuth] = useState(1);
    const [err, setErr] = useState(0);

    const [userid, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [arr, setArr] = useState([]);
    const [componentLoading, setComponentLoading] = useState(0);
 
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
                setConnected(1)
                setComponentLoading(1);
            }
        }
        else {
            setAuth(0);
            console.log('NO token');
        }
    }, [token]);

    if(componentLoading === 0){
        return(
            <div style={loadingDivStyle}>
                <CircularProgress style={loaderStyle}/>
            </div>
        );
    }

    return(
        <div>
            <NavBar
            currentUserId={userid}
            currentUserName={username}/>
            <div style={bodyStyle}>
                {connected === 1 ? <div style={bodyStyle}>
                    {
                        arr.map(e => {
                            console.log(e);
                            return <HomePost key={e._id} post={e} userid={userid}/>
                        })
                    }
                </div> : <CircularProgress style={circularStyle}/>}
            </div>
            {auth === 1 ? null : <Redirect to='/'/>}
        </div>
    )
}

export default HomePage;