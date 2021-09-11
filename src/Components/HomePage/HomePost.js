import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import LikeComment from "./LikeComment";

import TextField from '@material-ui/core/TextField';

const axios = require('axios');

const imgStyle={
    width: '520px',
}

const divStyle={
    textAlign: 'center',
    marginTop: '60px',
    width: '520px',
    margin: '50px auto 50px auto',
    border: 'solid',
    borderWidth: '1.2px',
    borderColor: 'lightgrey',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid'
}

const profileDiv = {
    height: '50px',
    width: '100%',
    display: 'flex'
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

const textDivStyle = {
    margin: '-10px 0 50px 15px'
}

const textStyle = {
    fontFamily: 'Roboto',
    fontSize: '15px'
}

const textUserStyle = {
    fontFamily: 'Roboto',
    fontSize: '15px',
    margin: '0 0 0 0'
}


const linkStyle = {
    color: 'black',
    style: 'none',
    textDecoration: 'none'
}

const linkUserStyle = {
    color: 'black',
    style: 'none',
    textDecoration: 'none',
    margin: '5px 0 0 18px',
    height: '30px'
}

const paragraphStyle = {
    fontFamily: 'Roboto',
    fontSize: '15px',
    margin: '5px 0 0 15px'
}

const buttonStyle = {
    style: 'none',
    backgroundColor: 'white',
    border: 'none'
}

const postCommentText = {
    fontFamily: 'Roboto',
    fontSize: '15px',
    color: 'blue'
}

const HomePost = ({post, userid}) => {
    const [comments, setComments] = useState(post.comments.slice(-2));
    const [comment, setComment] = useState('');

    const handleComent = async () => {
        if(comment.length >= 1){
            console.log(comment);

            const formData = new FormData();
            formData.append('paragraph', comment);

            let res = await axios.post('http://localhost:3000/addcomment/'+post._id, {'paragraph': comment}, {
                'headers' : {
                    'Authorization': 'Bearer '+ localStorage.getItem('token')
                }
            });
            console.log(res);
            if(comments.length >= 1) {
                var newComments = [comments.at(-1), res.data.comment];
                setComments([...newComments]);
            }
            else {
                var newComments = [res.data.comment];
                setComments([...newComments]);
            }
            setComment('');
        }
        
    }

    const changeComment = (e) => {
        setComment(e.target.value);
    }

    return(
        <div style={divStyle}>
            <div style={profileDiv}>
                <div>
                    <Link to={"/user/"+post.owner.username}>
                    <img src={'http://localhost:3000/public/users/'+post.owner._id+'/profile/profile.png'} alt="" srcset="" style={profileIcon}/>
                    </Link>
                </div>
                <div style={textDivStyle}> 
                <Link to={"/user/"+post.owner.username} style={linkStyle}>             
                    <h5 style={textStyle}>
                        {post.owner.username}
                    </h5>
                </Link>
                </div>
            </div>
            <img src={"http://localhost:3000/"+post.photo+'.png'} alt="" srcset="" style={imgStyle}/>
            <LikeComment post={post} userid={userid}/>
            <div style={nameParDiv}>
                <Link to={"/user/"+post.owner.username} style={linkUserStyle}>
                    <h5 style={textUserStyle}>
                        {post.owner.username}
                    </h5>
                </Link>
                <p style={paragraphStyle}>
                    {post.paragraph}
                </p>
            </div>
            <div>
                {comments.map(comment => {
                    return <div key={comment._id}>
                        <h4>
                            {comment.paragraph}
                        </h4>
                    </div>
                })}
            </div>
            <div style={nameParDiv}>
                <TextField
                    id="standard-full-width"
                    style={{ margin: 8 , maxWidth: '500px'}}
                    placeholder="Add comment"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={comment}
                    onChange={changeComment}
                />
                <button onClick={handleComent} style={buttonStyle}> <Link to='/home' style={linkStyle}><h4 style={postCommentText}>Post</h4></Link> </button>
            </div>
        </div>
    );
}

export default HomePost;