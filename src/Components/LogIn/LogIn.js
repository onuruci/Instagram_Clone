import React from 'react';
import {useState, useEffect} from 'react';
import { Redirect } from "react-router-dom";

import InstaMockUp from './InstaMocukUp';
import LogInForm from './LogInForm';
import SignupRedirect from './SignupRedirect';

const axios = require('axios');

const divStyle = {
    margin: "55px auto 0 auto",
    width: "900px",
    height: "800px",
    display: "flex"
}

const secDiv = {
    margin: "0 auto 0 5px",
    width: "350px",
    height: "1000px",
}

const LogIn = () => {

    const [err, setErr] = useState(0);
    const [auth, setAuth] = useState(0);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        
        const getData = async () => {
            let res = await axios.get('http://localhost:3000/main-page',{
                'headers' : {
                    'Authorization': 'Bearer '+ localStorage.getItem('token')
                }
            });
            console.log(res);
            if(res.data.err === 1){
                setErr(1);
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
    }, [token]);

    return(
        <div style={divStyle}>
            <InstaMockUp/>
            <div style={secDiv}>
                <LogInForm/>
                <SignupRedirect/>
            </div>
            {auth === 1 ? <Redirect to='/home'/> : null}
        </div>
    )
}

export default LogIn;