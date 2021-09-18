import React from 'react';

import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { useState } from 'react';

import { PopUpOverlay, PopUp, PopUpCloseButton, PopHeader, HorizontalDivider, LikesText, PopBody } from './ScHomePage';
import LikeName from './LikeName';

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

const likesDivStyle = {
    margin: '0 0 0 5px',
    display: 'flex',
    cursor: 'pointer'
}

const LikeComment = ({post, userid}) => {

    const [like, setLike] = useState(post.likedOnes.includes(userid));
    const [likeCount, setLikeCount] = useState(post.likes);
    const [popUp, setPopUp] = useState(false);
    const [likedOnes, setLikedOnes] = useState([]);

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

    const togglePopUp = () => {
        setPopUp(!popUp);
    }

    const handleLikeView = async () => {
        let res = await axios.get('http://localhost:3000/getlikes/'+post._id, {
            'headers' : {
                'Authorization': 'Bearer '+ localStorage.getItem('token')
            }
        });
        console.log(res);
        setLikedOnes(res.data.post.likedOnes);
        togglePopUp();
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
            <div style={likesDivStyle} onClick={handleLikeView}>
                <h4 style={textStyle}>{likeCount} likes</h4>
            </div> 
            {
                popUp === true ? 
                <PopUpOverlay onClick={togglePopUp}>
                    <PopUp onClick={(e) => e.stopPropagation()}>
                        <PopHeader>
                            <LikesText>
                                Likes
                            </LikesText>
                        </PopHeader>
                        <HorizontalDivider/>
                        <PopBody>
                            {likedOnes.map(user => {
                                return <LikeName key={user._id} user={user}/>
                            })}
                        </PopBody>
                    </PopUp>
                </PopUpOverlay> 
                : null
            }
        </div>
    );
}

export default LikeComment;