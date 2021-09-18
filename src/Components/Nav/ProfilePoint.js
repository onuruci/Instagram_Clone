import React, { useEffect, useState } from 'react';

import { Link , Redirect} from "react-router-dom";
import noprofile from './noprofile.png';

const linkStyle = {
    color: 'black',
    style: 'none',
    textDecoration: 'none'
}

const nameParDiv = {
    display: 'flex'
}

const profileIcon = {
    width: '40px',
    height: '40px',
    borderRadius: '100%',
    marginLeft: '10px',
    marginTop: '5px',
    marginBottom: 'auto'
}

const textStyle = {
    fontFamily: 'Roboto',
    fontSize: '15px',
    margin: '10px 0 0 15px'
}

const divStyle = {
    height: '60px',
    margin: '5px 0 0 0'
}

const ProfilePoint = ({user}) => {

    const [redirect, setRedirect] = useState(false);

    const handleRedirect = () => {
        window.location.assign('/user/'+user.username);
    }

    return(
        <div style={divStyle}>
            <Link style={linkStyle}>
                <div style={nameParDiv} onClick={handleRedirect}>
                    <img src={'http://localhost:3000/public/users/'+user._id+'/profile/profile.png'} alt="" srcset="" style={profileIcon}/>
                    <h3 style={textStyle}>{user.username}</h3>
                </div>
            </Link>
        </div>
    );
}

export default ProfilePoint;