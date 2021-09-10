import React from 'react';

import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { useState } from 'react';

const axios = require('axios');

const divStyle = {
    textAlign: 'left'
}

const buttonDivStyle = {
    margin: '0 0 0 5px',
    display: 'flex'
}

const linkStyle = {
    color: 'black',
    margin: '0 0 0 10px'
}

const textStyle = {
    margin: '10px 0 5px 12px',
    fontFamily: 'Roboto'
}

const LikeComment = ({post, userid}) => {

    const [like, setLike] = useState(post.likedOnes.includes(userid));
    const [likeCount, setLikeCount] = useState(post.likes);

    const handleLike = async () => {
        let res = await axios.post('http://localhost:3000/likepost/'+post._id, {}, {
            'headers' : {
                'Authorization': 'Bearer '+ localStorage.getItem('token')
            }
        });
        console.log(res);
        setLikeCount(res.data.post.likes);
        res.data.post.likedOnes.includes(res.data.authData.user._id) ? setLike(true) : setLike(false);
    };

    return(
        <div style={divStyle}>
            <div style={buttonDivStyle}>
                <Link style={linkStyle} to="/home" onClick={handleLike}>
                    {
                        like === true ? <FavoriteIcon fontSize="large"/> : <FavoriteBorderIcon fontSize="large"/>
                    }
                </Link>
                <Link style={linkStyle} to="/home">
                    <ChatBubbleOutlineIcon fontSize="large"/>
                </Link>
            </div>
            <div style={buttonDivStyle}>
                <h4 style={textStyle}>{likeCount} likes</h4>
            </div>  
        </div>
    );
}

export default LikeComment;