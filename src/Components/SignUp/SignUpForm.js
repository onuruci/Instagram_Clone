import React from 'react';
import {useState} from 'react';
import { Redirect } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import instalogo from './instalogo.png';

const axios = require('axios');

const divStyle = {
    width: "340px",
    height: "480px",
    margin: "50px auto 0 5px",
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'grey',
    alignText: 'center',
    alignItems: 'center',
    textAlign: 'center'
}

const logoStyle = {
    margin: "5px auto 0 auto",
    display: 'block'
}

const textStyle = {
    fontFamily: 'Roboto'
}

const inputFieldStyle = {
    margin: "10px 0 0 0"
}

const buttondStyle = {
    margin: "30px auto auto auto",
    display: "block"
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const SignUpForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [snack, setSnack] = useState(false);
    const [severity, setSeverity] = useState('error');
    const [message, setMessage] = useState('There was an error');
    const [redirect, setRedirect] = useState(0);
    
    const onUserNameChange = (e) => {
        setUsername(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onRepasswordChange = (e) => {
        setRepassword(e.target.value);
    }

    const handleSignUp = async () =>{
        if(username.length < 3 | password.length < 3){
            setSeverity('error');
            setMessage('Username and Password should be longer than 3');
            setSnack(true);
        }
        else if(password !== repassword){
            setSeverity('error');
            setMessage('Passwords should match');
            setSnack(true);
        }
        else{
            console.log(username);
            console.log(password);
            console.log(repassword);

            let payload = {
                username: username,
                password: password
            }

            let res = await axios.post('http://localhost:3000/sign-up', payload);

            console.log(res.data);
            if(!res.data.error){
                setRedirect(1);
            }

        }
        setUsername('');
        setPassword('');
        setRepassword('');
        
    }

    const handleClose = () => {
        setSnack(false);
    }

    return(
        <div style={divStyle}>
            <img src={instalogo} style={logoStyle} />
            <h3 style={textStyle}>Connect with your friends</h3>
            <h2 style={textStyle}>Sign Up Right Now</h2>
            <TextField id="outlined-basic" style={inputFieldStyle} label="Username" variant="outlined" value={username} onChange={onUserNameChange}/>
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                style={inputFieldStyle}
                value={password}
                onChange={onPasswordChange}
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                style={inputFieldStyle}
                value={repassword}
                onChange={onRepasswordChange}
            />
            <Button style={buttondStyle} variant="contained" color="primary" onClick={handleSignUp}>
                Sign Up
            </Button>
            <Snackbar
                anchorOrigin={{ vertical : 'bottom', horizontal : 'left'}}
                open={snack}
                onClose={handleClose}
                message="I love snacks"
                key="{vertical + horizontal}"
            >
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>    
            </Snackbar>
            {redirect === 1 ? <Redirect to='/'/> : null}
        </div>
    )
}

export default SignUpForm;