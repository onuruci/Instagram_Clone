import React from 'react';
import {useState, useEffect} from 'react';
import { Redirect} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';

import NavBar from '../Nav/NavBar';

const axios = require('axios');

const bodyStyle = {
    width: '980px',
    margin: '80px auto 0 auto',
    minHeight: '1000px',
    height: 'auto'
}

const textStyle = {
    fontFamily: 'Roboto'
}

const headerDivStyle = {
    width: '100%',
    textAlign: 'center'
}

const iconStyle = {
    margin : '0 auto 0 auto'
}

const sampleBody = {
    width: '100%',
}
const sampleeBody = {
    textAlign: 'center',
    marginTop: '30px'
}

const samplerBody = {
    textAlign: 'center',
    marginTop: '120px'
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    input: {
      display: 'none',
    },
  }));

const ChangeProfile = () => {

    const classes = useStyles();

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

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        console.log(file);
    }

    const changeParagraph = (e) => {
        setParagraph(e.target.value);
    };

    function refreshPage(){ 
        window.location.reload(); 
    }

    const handlePost = async () => {
        const formData = new FormData();
        formData.append('profilephoto', file);

        let rep = await axios.post("http://localhost:3000/addprofile", formData, {
            'headers' : {
                'Authorization': 'Bearer '+ localStorage.getItem('token')
            }
        });

        refreshPage();
    }

    return(
        <div>
            <NavBar
            currentUserId={currentUserId}
            currentUserName={currentUserName}
            setAuth={setAuth}/>
            <div style={bodyStyle}>
                <div style={headerDivStyle}>
                    <h1 style={textStyle}>
                        Change Profile Picture
                    </h1>
                </div>
                <div style={sampleBody}>
                    <div style={sampleeBody}>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" style={iconStyle} onChange={onFileChange}/>
                        <label htmlFor="icon-button-file" style={iconStyle}>
                            <IconButton color="primary" aria-label="upload picture" component="span" size="large" style={iconStyle}>
                            <PhotoCamera style={iconStyle}/>
                            </IconButton>
                            <label htmlFor="icon-button-file">{file !== '' ? file.name : "Not Selected"}</label>
                        </label>
                    </div>
                    <div style={samplerBody}>
                        <Button variant="contained" color="primary" onClick={handlePost}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
            {auth === 1 ? null : <Redirect to='/'/>}
            {noUser === 0 ? null : <Redirect to='/home'/>}
            {posted === 0 ? null : <Redirect to='/profile'/>}  
        </div>
    );
}

export default ChangeProfile;